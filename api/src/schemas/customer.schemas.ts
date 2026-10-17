import z, {} from 'zod';

export const createCustomerSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  imageUrl: z.url().optional()
});

export const updateCustomerSchema = createCustomerSchema.partial();

export type CreateCustomer = z.infer<typeof createCustomerSchema>;
export type UpdateCustomer = z.infer<typeof updateCustomerSchema>;