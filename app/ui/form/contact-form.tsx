'use client';

import { useActionState, useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CancelCircleIcon,
  Loading02Icon,
  MailOpenIcon,
  SentIcon,
} from 'hugeicons-react';
import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import { saveMessage, SaveMessageStatus } from '@/app/lib/actions';
import FormInput from '@/app/ui/form/form-input';
import FormGdprCheckbox from '@/app/ui/form/form-gdpr-checkbox';
import StatusCard from '@/app/ui/card/status-card';
import SubmitButton from '@/app/ui/button/submit-button';
import PresenceAnimation from '@/app/ui/animation/presence-animation';
import { Form } from '@/app/lib/contentful/generated/sdk';
import FormTextarea from '@/app/ui/form/form-textarea';
import { useLocale } from 'next-intl';

type Props = {
  content?: Form;
};

export default function ContactForm({ content }: Props) {
  const locale = useLocale();
  const [pending, startTransaction] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [state, formAction] = useActionState<SaveMessageStatus, FormData>(
    saveMessage,
    null,
  );
  const [maxRetries, setMaxRetries] = useState(3);

  const {
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<ContactFormData>({
    mode: 'onTouched',
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

  const handleFormAction = (formData: FormData) => {
    formData.set('baseUrl', `${window.origin}/${locale}`);
    startTransaction(() => formAction(formData));
  };

  const handleRetry = () => {
    setMaxRetries((curr) => --curr);
    const formData = new FormData();
    formData.set('baseUrl', `${window.origin}/${locale}`);
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
          pending || submitted || state?.serverError
            ? 'pointer-events-none opacity-0'
            : 'opacity-100'
        }`}
      >
        <form action={handleFormAction} className="space-y-4">
          <FormInput
            register={register}
            name="name"
            label={content?.labels?.name || ''}
            defaultValue={state?.rawData?.name}
            errors={errors}
            validationMessages={content?.validationMessages}
          />
          <FormInput
            register={register}
            name="email"
            label={content?.labels?.email || ''}
            defaultValue={state?.rawData?.email}
            errors={errors}
            validationMessages={content?.validationMessages}
          />
          <FormInput
            register={register}
            name="role"
            label={content?.labels?.role || ''}
            defaultValue={state?.rawData?.role}
            errors={errors}
            validationMessages={content?.validationMessages}
          />
          <FormTextarea
            register={register}
            name="message"
            label={content?.labels?.message || ''}
            defaultValue={state?.rawData?.message}
            errors={errors}
            validationMessages={content?.validationMessages}
          />
          <FormGdprCheckbox
            content={{
              intro: content?.gdprNoticeIntro,
              linkText: content?.gdprNoticeLinkText,
              details: content?.gdprNoticeDetails,
            }}
            register={register}
            name="consent"
            defaultChecked={state?.rawData?.consent}
            errors={errors}
            validationMessages={content?.validationMessages}
          />
          <SubmitButton>
            <span className="transition-transform duration-300 group-hover:translate-x-4">
              {content?.sendMessageLabel}
            </span>
            <SentIcon className="ml-2 rotate-45 transition-transform duration-1000 group-hover:translate-x-60" />
          </SubmitButton>
        </form>
      </div>
      <PresenceAnimation
        show={!!state?.serverError && !pending}
        className="absolute inset-0 flex items-center justify-center"
        withTranslation
      >
        <StatusCard
          icon={<CancelCircleIcon size={52} />}
          title={content?.errorTitle}
          button={{
            label: content?.errorButtonLabel,
            onClick: handleRetry,
            disabled: maxRetries <= 0,
          }}
        >
          <p className="text-center">
            {content?.errorDescription}{' '}
            <a
              href={`mailto:${content?.errorContactEmail}`}
              className="text-(--highlight) hover:underline hover:underline-offset-4"
            >
              {content?.errorContactEmail}
            </a>
            .
          </p>
        </StatusCard>
      </PresenceAnimation>
      <PresenceAnimation
        show={pending}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Loading02Icon className="animate-spin text-(--secondary)" size={52} />
      </PresenceAnimation>
      <PresenceAnimation
        show={submitted}
        className="absolute inset-0 flex items-center justify-center"
        withTranslation
      >
        <StatusCard
          icon={<MailOpenIcon size={52} />}
          title={content?.emailVerificationTitle}
          button={{
            label: content?.emailResendButtonLabel,
            onClick: () => setSubmitted(false),
          }}
        >
          <p className="text-center">{content?.emailVerificationDescription}</p>
        </StatusCard>
      </PresenceAnimation>
    </div>
  );
}
