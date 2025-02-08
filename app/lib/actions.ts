'use server';

import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import supabaseClient from '@/app/lib/supabase/client';
import nodemailerClient from '@/app/lib/nodemailer/client';
import VerifyTemplate from '@/app/lib/nodemailer/template/verify-template';
import { render } from '@react-email/components';
import { Locale } from '@/i18n/routing';

export type SaveMessageStatus =
  | {
      success: true;
      rawData: ContactFormData;
      token: string;
      email: string;
    }
  | {
      success: false;
      rawData: ContactFormData;
      fieldErrors?: Partial<
        Record<keyof ContactFormData, string[] | undefined>
      >;
      serverError?: boolean;
    }
  | null;

export const saveMessage = async (
  _prevState: SaveMessageStatus,
  formData: FormData,
): Promise<SaveMessageStatus> => {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    role: formData.get('role'),
    message: formData.get('message'),
    consent: !!formData.get('consent'),
  } as ContactFormData;

  const validatedFields = contactFormSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      success: false,
      rawData,
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data, error } = await supabaseClient()
    .from('contacts')
    .insert(validatedFields.data)
    .select('verification_token')
    .single();

  if (error) {
    return {
      success: false,
      rawData,
      serverError: true,
    };
  }

  try {
    await sendVerificationEmail(
      formData.get('baseUrl') as string,
      formData.get('locale') as Locale,
      data.verification_token!,
      validatedFields.data.name,
      validatedFields.data.email,
    );
  } catch {
    return {
      success: false,
      rawData,
      serverError: true,
    };
  }

  return {
    success: true,
    rawData,
    token: data.verification_token!,
    email: validatedFields.data.email,
  };
};

export const sendVerificationEmail = async (
  baseUrl: string,
  locale: Locale,
  token: string,
  name: string,
  email: string,
) => {
  const verifyUrl = `${baseUrl}/${locale}/verify?token=${token}`;
  const emailHtml = await render(
    await VerifyTemplate({ locale, name, verifyUrl }),
  );

  await nodemailerClient().sendMail({
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject:
      locale === 'en'
        ? 'Confirm your email address'
        : 'Bestätigen Sie Ihre E-Mail-Adresse',
    html: emailHtml,
  });
};
