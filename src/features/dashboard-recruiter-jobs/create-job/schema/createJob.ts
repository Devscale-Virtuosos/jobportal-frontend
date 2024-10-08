import { z } from 'zod';

export const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  experienceLevel: z.string().min(1, {
    message: 'Experience level is required.',
  }),
  skills: z.string().min(1, {
    message: 'Skills are required.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters long.',
  }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
