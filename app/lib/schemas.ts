import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Please enter your name')
    .max(100, 'Name cannot exceed 100 characters'),
  email: z
    .string()
    .email('The email provided is invalid')
    .max(100, 'Email cannot exceed 100 characters'),
  company: z
    .string()
    .max(100, 'Company name cannot exceed 100 characters')
    .optional(),
  message: z
    .string()
    .min(1, 'Please enter your message')
    .max(1000, 'Message cannot exceed 1000 characters'),
  consent: z.literal(true, { message: 'You must agree to proceed' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
