import { Schema, model } from 'mongoose';
import { IInformation, informationModel } from './information.interface';

const informationSchema = new Schema<IInformation>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  activeStatus: {
    type: Boolean,
    default: true,
  },
});

export const Information = model<IInformation, informationModel>(
  'Information',
  informationSchema
);
