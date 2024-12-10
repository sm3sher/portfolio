import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import { createClient } from '@/app/supabase/client';

export type ServerResponse = {
  errors?: Partial<Record<keyof ContactFormData, string[] | undefined>>;
};

export async function sendMessage(
  formData: ContactFormData,
): Promise<ServerResponse> {
  const validatedFields = contactFormSchema.safeParse(formData);
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const supabase = createClient();
  const { error } = await supabase
    .from('contacts')
    .insert(validatedFields.data);

  if (error) {
    // TODO: handle error
    console.log(error);
    return {};
  } else {
    return {};
  }
}
