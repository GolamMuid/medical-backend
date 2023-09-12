import { Model } from 'mongoose';

export type IGallery = {
  title: string;
  image: string;
  activeStatus: boolean;
};

export type galleryModel = Model<IGallery, Record<string, unknown>>;
