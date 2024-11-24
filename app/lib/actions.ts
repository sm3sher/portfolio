import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import { FieldErrors } from 'react-hook-form';

export async function sendMessage(
  formData: ContactFormData,
): Promise<{ errors?: FieldErrors<ContactFormData> }> {
  const validatedFields = contactFormSchema.safeParse(formData);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!validatedFields.success) {
    // TODO: return field errors
  }

  // TODO: process message

  return {};
}
