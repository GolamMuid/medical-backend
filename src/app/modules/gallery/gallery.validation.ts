import { z } from 'zod';

const createGalleryZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
  }),
});

const updateGalleryZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    activeStatus: z.boolean().optional(),
  }),
});

export const GalleryValidation = {
  createGalleryZodSchema,
  updateGalleryZodSchema,
};
