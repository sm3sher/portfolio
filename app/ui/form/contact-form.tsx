'use client';

import { useActionState, useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert01Icon, SentIcon } from 'hugeicons-react';
import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import { saveMessage, SaveMessageStatus } from '@/app/lib/actions';
import FormInput from '@/app/ui/form/form-input';
import FormGdprCheckbox from '@/app/ui/form/form-gdpr-checkbox';
import Button from '@/app/ui/button/button';
import SubmitButton from '@/app/ui/button/submit-button';

// TODO: check if form input reset with server actions fixed https://github.com/vercel/next.js/issues/72949
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
    mode: 'onTouched',
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === 'error' && state.fieldErrors) {
      Object.entries(state.fieldErrors).forEach(([key, errorMessages]) => {
        if (errorMessages) {
          setError(key as keyof ContactFormData, {
            type: 'server',
            message: errorMessages.join(', '),
          });
        }
      });
    }
    if (state.status === 'success') {
      setSubmitted(true);
      reset();
    }
  }, [state, setError, reset]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          pending || submitted ? 'pointer-events-none opacity-0' : 'opacity-100'
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
            errors={errors}
          />
          <FormInput
            register={register}
            name="email"
            placeholder="Email address"
            errors={errors}
          />
          <FormInput
            register={register}
            name="company"
            placeholder="Company (optional)"
            errors={errors}
          />
          <FormInput
            register={register}
            name="message"
            placeholder="Message"
            errors={errors}
            elementType="textarea"
            rows={5}
          />
          <FormGdprCheckbox
            register={register}
            name="consent"
            errors={errors}
          />
          <SubmitButton>
            <SentIcon />
            Send Message
          </SubmitButton>
        </form>
        {state?.status === 'error' && state.dbError && (
          <div
            aria-live="polite"
            className="mt-6 flex flex-col rounded-lg border border-[--error-color] bg-[--error-background] px-3 py-2 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Alert01Icon />
              <span>Oops! Something went wrong.</span>
            </div>
            <p className="mt-2 text-base">
              Looks like I couldn’t process your message this time. Please try
              again soon.
            </p>
            <p className="mt-2 text-base">
              In the meantime, feel free to email me directly at{' '}
              <a
                href="mailto:roman.jum99@gmail.com"
                className="font-semibold text-[--link-color] hover:underline"
              >
                roman.jum99@gmail.com
              </a>
              .
            </p>
          </div>
        )}
      </div>
      {pending && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-lg font-medium text-[--secondary]">
            Sending Message...
          </p>
        </div>
      )}
      {submitted && (
        <div className="absolute inset-0 flex items-center justify-center text-center opacity-100 transition-opacity duration-500">
          <div>
            <h2 className="text-2xl font-semibold text-[--success-color]">
              Message sent!
            </h2>
            <p className="mt-2">
              Thank you for reaching out. I&#39;ll get back to you shortly.
            </p>
            <div className="mt-4 flex justify-center">
              <Button onClick={() => setSubmitted(false)}>
                Another message?
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
