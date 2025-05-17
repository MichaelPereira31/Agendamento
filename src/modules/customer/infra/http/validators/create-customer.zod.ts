import { z } from 'zod';

export const createCustomerSchema = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
  })
  .required();

export type CreateCustomerDto = z.infer<typeof createCustomerSchema>;
