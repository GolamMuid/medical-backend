import { Model } from 'mongoose';

export type IVideo = {
  title: string;
  link: string;
  activeStatus: boolean;
};

export type videoModel = Model<IVideo, Record<string, unknown>>;
