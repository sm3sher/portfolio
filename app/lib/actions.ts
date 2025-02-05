'use server';

import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import supabaseClient from '@/app/lib/supabase/client';
import nodemailerClient from '@/app/lib/nodemailer/client';
import { EmailTemplate } from '@/app/lib/nodemailer/template/email-template';
import { render } from '@react-email/components';

export type SaveMessageStatus =
  | {
      success: true;
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
      data.verification_token!,
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
    token: data.verification_token!,
    email: validatedFields.data.email,
  };
};

export const sendVerificationEmail = async (
  baseUrl: string,
  token: string,
  email: string,
) => {
  const verifyUrl = `${baseUrl}/verify?token=${token}`;
  const emailHtml = await render(EmailTemplate({ verifyUrl }));

  await nodemailerClient().sendMail({
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Verify your email',
    html: emailHtml,
  });
};
