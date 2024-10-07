import { z } from 'zod';

export const inputCompanySchema = z.object({
  userId: z.string(),
  name: z.string(),
  location: z.string(),
  industry: z.string(),
  description: z.string(),
  logo: z.string().optional(),
});

export type TInputCompany = z.infer<typeof inputCompanySchema>;

export interface ICompany extends TInputCompany {
  _id: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
