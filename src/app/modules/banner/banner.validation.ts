import { z } from 'zod';

const createBannerZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string().optional(),
    image: z.string({
      required_error: 'Image is required',
    }),
  }),
});

const updateBannerZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    activeStatus: z.boolean().optional(),
  }),
});

export const BannerValidation = {
  createBannerZodSchema,
  updateBannerZodSchema,
};
