'use client';

import { useActionState, useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CancelCircleIcon,
  CheckmarkCircle01Icon,
  Loading02Icon,
  SentIcon,
} from 'hugeicons-react';
import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import { saveMessage, SaveMessageStatus } from '@/app/lib/actions';
import FormInput from '@/app/ui/form/form-input';
import FormGdprCheckbox from '@/app/ui/form/form-gdpr-checkbox';
import StatusCard from '@/app/ui/card/status-card';
import SubmitButton from '@/app/ui/button/submit-button';
import PresenceAnimation from '@/app/ui/animation/presence-animation';

export default function ContactForm() {
  const [pending, startTransaction] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [state, formAction] = useActionState<SaveMessageStatus, FormData>(
    saveMessage,
    null,
  );

  const {
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<ContactFormData>({
    mode: 'onChange',
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (!state) {
      return;
    }
    if (!state.success && state.fieldErrors) {
      Object.entries(state.fieldErrors).forEach(([key, errorMessages]) => {
        if (errorMessages) {
          setError(key as keyof ContactFormData, {
            type: 'server',
            message: errorMessages.join(', '),
          });
        }
      });
    }
    if (state.success) {
      setSubmitted(true);
      reset();
    }
  }, [state, setError, reset]);

  const handleRetry = () => {
    const formData = new FormData();
    if (state?.rawData) {
      Object.entries(state.rawData).forEach(([key, value]) => {
        formData.set(key, String(value));
      });
    }
    startTransaction(() => formAction(formData));
  };

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          pending || submitted || state?.dbError
            ? 'pointer-events-none opacity-0'
            : 'opacity-100'
        }`}
      >
        <form
          action={(formData) => startTransaction(() => formAction(formData))}
          className="space-y-4"
        >
          <FormInput
            register={register}
            name="name"
            placeholder="Name"
            defaultValue={state?.rawData?.name}
            errors={errors}
          />
          <FormInput
            register={register}
            name="email"
            placeholder="Email address"
            defaultValue={state?.rawData?.email}
            errors={errors}
          />
          <FormInput
            register={register}
            name="role"
            placeholder="Job title, company name (optional)"
            defaultValue={state?.rawData?.role}
            errors={errors}
          />
          <FormInput
            register={register}
            name="message"
            placeholder="Message"
            defaultValue={state?.rawData?.message}
            errors={errors}
            elementType="textarea"
            rows={5}
          />
          <FormGdprCheckbox
            register={register}
            name="consent"
            defaultChecked={state?.rawData?.consent}
            errors={errors}
          />
          <SubmitButton>
            <span className="transition-transform duration-300 group-hover:translate-x-4">
              Send Message
            </span>
            <SentIcon className="ml-2 rotate-45 transition-transform duration-1000 group-hover:translate-x-60" />
          </SubmitButton>
        </form>
      </div>
      <PresenceAnimation
        show={!!state?.dbError && !pending}
        className="absolute inset-0 flex items-center justify-center"
        withTranslation
      >
        <StatusCard
          icon={<CancelCircleIcon size={52} />}
          title="Something went wrong."
          button={{ label: 'Try Again', onClick: handleRetry }}
        >
          <p className="text-center">
            It seems there was an issue processing your message. Please try
            again using the button below. If the problem persists, feel free to
            reach out to me directly at{' '}
            <a
              href="mailto:roman@jumatov.com"
              className="text-[--highlight] hover:underline hover:underline-offset-4"
            >
              roman@jumatov.com
            </a>
            .
          </p>
        </StatusCard>
      </PresenceAnimation>
      <PresenceAnimation
        show={pending}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Loading02Icon className="animate-spin text-[--secondary]" size={52} />
      </PresenceAnimation>
      <PresenceAnimation
        show={submitted}
        className="absolute inset-0 flex items-center justify-center"
        withTranslation
      >
        <StatusCard
          icon={<CheckmarkCircle01Icon size={52} />}
          title="Message Sent!"
          button={{
            label: 'Send Another Message',
            onClick: () => setSubmitted(false),
          }}
        >
          <p className="text-center">
            Thank you for reaching out. I’ll respond within 24 hours to discuss
            the next steps.
          </p>
        </StatusCard>
      </PresenceAnimation>
    </div>
  );
}
