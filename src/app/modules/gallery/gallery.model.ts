import { Schema, model } from 'mongoose';
import { IGallery, galleryModel } from './gallery.interface';

const gallerySchema = new Schema<IGallery>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  activeStatus: {
    type: Boolean,
    default: true,
  },
});

export const Gallery = model<IGallery, galleryModel>('Gallery', gallerySchema);
