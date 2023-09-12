import { z } from 'zod';

const createVideoZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    link: z
      .string({
        required_error: 'url is required',
      })
      .url(),
  }),
});

const updateVideoZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    link: z.string().url().optional(),
    activeStatus: z.boolean().optional(),
  }),
});

export const VideoValidation = {
  createVideoZodSchema,
  updateVideoZodSchema,
};
