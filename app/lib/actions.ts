import { ContactFormData, contactFormSchema } from '@/app/lib/schemas';

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

  // TODO: process message
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {};
}
