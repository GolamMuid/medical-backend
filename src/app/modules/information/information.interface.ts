import { Model } from 'mongoose';

export type IInformation = {
  title: string;
  description: string;
};

export type informationModel = Model<IInformation, Record<string, unknown>>;
