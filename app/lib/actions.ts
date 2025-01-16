'use server';

import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import supabaseClient from '@/app/lib/supabase/client';

export type SaveMessageStatus = {
  success: boolean;
  rawData?: ContactFormData;
  fieldErrors?: Partial<Record<keyof ContactFormData, string[] | undefined>>;
  dbError?: boolean;
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

  const { error } = await supabaseClient()
    .from('contacts')
    .insert(validatedFields.data);

  if (error) {
    return {
      success: false,
      rawData,
      dbError: true,
    };
  }
  return { success: true };
};
