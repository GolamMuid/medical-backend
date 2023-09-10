import { Model } from 'mongoose';

export type IBanner = {
  title: string;
  description: string | null;
  image: string;
  activeStatus: boolean;
};

export type bannerModel = Model<IBanner, Record<string, unknown>>;
