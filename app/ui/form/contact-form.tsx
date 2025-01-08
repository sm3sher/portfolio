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
import Button from '@/app/ui/button/button';
import SubmitButton from '@/app/ui/button/submit-button';
import { AnimatePresence, motion } from 'motion/react';

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

  const handleRetry = () => {
    // TODO: use actual formData when github issue is resolved or workaround is implemented
    const formData = new FormData();
    formData.set('name', 'John Doe');
    formData.set('email', 'test@gmail.com');
    formData.set('role', '');
    formData.set('message', 'Hey there');
    formData.set('consent', 'true');
    startTransaction(() => formAction(formData));
  };

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          pending || submitted || (state?.status === 'error' && state.dbError)
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
            name="role"
            placeholder="Job title and company (optional)"
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
      </div>
      <AnimatePresence>
        {state?.status === 'error' && state.dbError && (
          <motion.div
            aria-live="polite"
            className="absolute top-12 flex items-center md:inset-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <div className="rounded-2xl bg-[--banner-color] px-8 py-6 sm:px-10 sm:py-8">
              <div className="flex flex-col items-center text-[--highlight]">
                <CancelCircleIcon size={52} />
                <h5 className="mb-2 mt-4">Something went wrong.</h5>
              </div>
              <p className="text-center">
                Looks like I couldn’t process your message this time. Please try
                again soon. In the meantime, feel free to email me directly at{' '}
                <a
                  href="mailto:contact@jumatov.com"
                  className="text-[--highlight] hover:underline hover:underline-offset-4"
                >
                  contact@jumatov.com
                </a>
                .
              </p>
              <div className="mt-4 flex justify-center">
                <Button onClick={handleRetry}>Try again</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {pending && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Loading02Icon className="animate-spin" size={52} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <div className="rounded-2xl bg-[--banner-color] px-8 py-6 sm:px-10 sm:py-8">
              <div className="flex flex-col items-center text-[--highlight]">
                <CheckmarkCircle01Icon size={52} />
                <h5 className="mb-2 mt-4">Message sent!</h5>
              </div>
              <p className="text-center">
                Thank you for reaching out. I’ll get back to you shortly.
              </p>
              <div className="mt-4 flex justify-center">
                <Button onClick={() => setSubmitted(false)}>
                  Another message?
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
