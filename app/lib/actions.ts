'use server';

import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import supabaseClient from '@/app/lib/supabase/client';

export type SaveMessageStatus =
  | {
      status: 'success';
    }
  | {
      status: 'error';
      fieldErrors?: Partial<
        Record<keyof ContactFormData, string[] | undefined>
      >;
      dbError?: boolean;
    }
  | null;

export const saveMessage = async (
  _prevState: SaveMessageStatus,
  formData: FormData,
): Promise<SaveMessageStatus> => {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    jobTitle: formData.get('jobTitle'),
    message: formData.get('message'),
    consent: !!formData.get('consent'),
  });
  if (!validatedFields.success) {
    return {
      status: 'error',
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { jobTitle, ...data } = validatedFields.data;
  const { error } = await supabaseClient()
    .from('contacts')
    .insert({ ...data, job_title: jobTitle });

  if (error) {
    return {
      status: 'error',
      dbError: true,
    };
  }
  return { status: 'success' };
};
