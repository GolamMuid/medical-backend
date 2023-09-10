import { Model } from 'mongoose';

export type IInformation = {
  title: string;
  description: string;
  activeStatus: boolean;
};

export type informationModel = Model<IInformation, Record<string, unknown>>;
