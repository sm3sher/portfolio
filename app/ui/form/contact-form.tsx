'use client';

import { useActionState, useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingSpinner from '@/app/ui/loading/loading-spinner';
import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import {
  saveMessage,
  SaveMessageStatus,
  sendVerificationEmail,
} from '@/app/lib/actions';
import ContactFormFields from '@/app/ui/form/contact-form-fields';
import PresenceAnimation from '@/app/ui/animation/presence-animation';
import { Form } from '@/app/lib/contentful/generated/sdk';
import FormErrorCard from '@/app/ui/form/card/form-error-card';
import SubmittedStatusCard from '@/app/ui/form/card/form-success-card';
import { useLocale } from 'next-intl';
import { Locale } from '@/i18n/routing';

type Props = {
  content?: Form;
};

export default function ContactForm({ content }: Props) {
  const locale = useLocale() as Locale;
  const [pending, startTransaction] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [state, formAction] = useActionState<SaveMessageStatus, FormData>(
    saveMessage,
    null,
  );
  const [retryAttempts, setRetryAttempts] = useState(0);
  const [resendAttempts, setResendAttempts] = useState(0);

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
    formData.set('baseUrl', window.origin);
    formData.set('locale', locale);
    startTransaction(() => formAction(formData));
  };

  const handleRetry = () => {
    setRetryAttempts((prev) => ++prev);
    const formData = new FormData();
    formData.set('baseUrl', window.origin);
    formData.set('locale', locale);
    if (state?.rawData) {
      Object.entries(state.rawData).forEach(([key, value]) => {
        formData.set(key, String(value));
      });
    }
    startTransaction(() => formAction(formData));
  };

  const handleResend = () => {
    if (!state?.success) return;
    setResendAttempts((prev) => ++prev);
    startTransaction(() =>
      sendVerificationEmail(
        window.origin,
        locale,
        state.token,
        state.rawData.name,
        state.email,
      ),
    );
  };

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          pending || submitted || (!state?.success && state?.serverError)
            ? 'pointer-events-none opacity-0'
            : 'opacity-100'
        }`}
      >
        <ContactFormFields
          content={content}
          state={state}
          handleFormAction={handleFormAction}
          errors={errors}
          register={register}
        />
      </div>
      <PresenceAnimation
        show={pending}
        className="absolute inset-0 flex items-center justify-center"
      >
        <LoadingSpinner />
      </PresenceAnimation>
      <PresenceAnimation
        show={!state?.success && !!state?.serverError && !pending}
        className="absolute inset-0 flex items-center justify-center"
        withTranslation
      >
        <FormErrorCard
          content={content}
          handleRetry={handleRetry}
          retryAttempts={retryAttempts}
        />
      </PresenceAnimation>
      <PresenceAnimation
        show={submitted && !pending}
        className="absolute inset-0 flex items-center justify-center"
        withTranslation
      >
        <SubmittedStatusCard
          content={content}
          handleResend={handleResend}
          resendAttempts={resendAttempts}
        />
      </PresenceAnimation>
    </div>
  );
}
