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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onTouched',
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsPending(true);
    const response = await sendMessage(data);
    if (response.errors) {
      // TODO: handle server errors
    }
    setIsPending(false);
  };

  return (
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
      <FormGdprCheckbox register={register} name="consent" errors={errors} />
      <button
        type="submit"
        disabled={isPending}
        className="base-border flex w-full items-center justify-center gap-2 rounded-lg bg-[--background-hover] px-4 py-2 font-[family-name:--font-geist-mono] enabled:hover:bg-[--background-active]"
      >
        {!isPending && <SentIcon size={20} />}
        {isPending ? 'Sending Message...' : 'Send Message'}
      </button>
    </form>
  );
}
