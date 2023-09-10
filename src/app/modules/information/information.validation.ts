import { z } from 'zod';

const createInformationZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(5),
    description: z
      .string({
        required_error: 'Title is required',
      })
      .min(20),
  }),
});

const updateInformationZodSchema = z.object({
  body: z.object({
    title: z.string().min(5).optional(),
    description: z.string().min(20).optional(),
    activeStatus: z.boolean().optional(),
  }),
});

export const InformationValidation = {
  createInformationZodSchema,
  updateInformationZodSchema,
};
