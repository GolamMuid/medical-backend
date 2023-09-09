import { Schema, model } from 'mongoose';
import { IBanner, bannerModel } from './banner.interface';

const bannerSchema = new Schema<IBanner>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Banner = model<IBanner, bannerModel>('Banner', bannerSchema);
