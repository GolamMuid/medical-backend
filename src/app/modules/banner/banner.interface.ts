import { Model } from 'mongoose';

export type IBanner = {
  title: string;
  description: string | null;
  image: string;
};

export type bannerModel = Model<IBanner, Record<string, unknown>>;
