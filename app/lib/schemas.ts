import { z } from 'zod';

export enum ValidationMessages {
  nameRequired = 'nameRequired',
  nameMaxLength = 'nameMaxLength',
  emailInvalid = 'emailInvalid',
  emailMaxLength = 'emailMaxLength',
  roleMaxLength = 'roleMaxLength',
  messageRequired = 'messageRequired',
  messageMaxLength = 'messageMaxLength',
  consentRequired = 'consentRequired',
}

export type ValidationMessageKey = keyof typeof ValidationMessages;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, ValidationMessages.nameRequired)
    .max(100, ValidationMessages.nameMaxLength),
  email: z
    .string()
    .email(ValidationMessages.emailInvalid)
    .max(100, ValidationMessages.emailMaxLength),
  role: z.string().max(150, ValidationMessages.roleMaxLength).optional(),
  message: z
    .string()
    .min(1, ValidationMessages.messageRequired)
    .max(1000, ValidationMessages.messageMaxLength),
  consent: z.boolean().refine((val) => val, {
    message: ValidationMessages.consentRequired,
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
