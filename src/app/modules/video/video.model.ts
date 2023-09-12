import { Schema, model } from 'mongoose';
import { IVideo, videoModel } from './video.interface';

const videoSchema = new Schema<IVideo>({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  activeStatus: {
    type: Boolean,
    default: true,
  },
});

export const Video = model<IVideo, videoModel>('Video', videoSchema);
