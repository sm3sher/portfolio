'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SentIcon } from 'hugeicons-react';
import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import { sendMessage } from '@/app/lib/actions';
import { useState } from 'react';
import FormInput from '@/app/ui/form-input';
import FormGdprCheckbox from '@/app/ui/form-gdpr-checkbox';

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ContactFormData>({
    mode: 'onTouched',
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsPending(true);
    const response = await sendMessage(data);
    if (response?.errors) {
      Object.entries(response.errors).forEach(([key, errorMessages]) => {
        if (errorMessages) {
          setError(key as keyof ContactFormData, {
            type: 'server',
            message: errorMessages.join(', '),
          });
        }
      });
      setIsPending(false);
      return;
    }
    reset();
    setIsPending(false);
    setIsSubmitted(true);
  };

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          isPending || isSubmitted
            ? 'pointer-events-none opacity-0'
            : 'opacity-100'
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          <button
            type="submit"
            disabled={isPending}
            className="base-border flex w-full items-center justify-center gap-2 rounded-lg bg-[--background-hover] px-4 py-2 font-[family-name:--font-geist-mono] enabled:hover:bg-[--background-active]"
          >
            <SentIcon size={20} />
            Send Message
          </button>
        </form>
      </div>
      {isPending && !isSubmitted && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-lg font-medium">Sending Message...</p>
        </div>
      )}
      {isSubmitted && (
        <div className="absolute inset-0 flex items-center justify-center text-center opacity-100 transition-opacity duration-500">
          <div>
            <h2 className="text-2xl font-semibold text-emerald-500">
              Message sent!
            </h2>
            <p className="mt-2">
              Thank you for reaching out. I&#39;ll get back to you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="base-border mt-4 justify-center gap-2 rounded-lg bg-[--background-hover] px-4 py-2 font-[family-name:--font-geist-mono] enabled:hover:bg-[--background-active]"
            >
              Send another message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
