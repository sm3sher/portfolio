'use server';

import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import supabaseClient from '@/app/lib/supabase/client';
import nodemailerClient from '@/app/lib/nodemailer/client';

export type SaveMessageStatus = {
  success: boolean;
  rawData?: ContactFormData;
  fieldErrors?: Partial<Record<keyof ContactFormData, string[] | undefined>>;
  serverError?: boolean;
} | null;

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

  const baseUrl = formData.get('baseUrl') as string;
  if (error || !baseUrl) {
    return {
      success: false,
      rawData,
      serverError: true,
    };
  }

  try {
    await sendVerificationEmail(
      baseUrl,
      data.verification_token,
      validatedFields.data.email,
    );
  } catch {
    return {
      success: false,
      rawData,
      serverError: true,
    };
  }

  return { success: true };
};

const sendVerificationEmail = async (
  baseUrl: string,
  token: string,
  email: string,
) => {
  const verifyUrl = `${baseUrl}/api/verify?token=${token}`;
  await nodemailerClient().sendMail({
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Verify your email',
    html: `<p>Click the link to verify: <a href="${verifyUrl}">Verify Email</a></p>`,
  });
};
