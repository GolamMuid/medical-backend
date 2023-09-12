import { IGallery } from './gallery.interface';
import { Gallery } from './gallery.model';

// ? Create Gallery

const createGallery = async (payload: IGallery): Promise<IGallery | null> => {
  const result = await Gallery.create(payload);
  return result;
};

// ? Get All Galleries

const getAllGallery = async (): Promise<IGallery[] | null> => {
  const result = await Gallery.find();
  return result;
};

// ? Get Active Galleries

const getActiveGallery = async (): Promise<IGallery[] | null> => {
  const result = await Gallery.find({ activeStatus: true });
  return result;
};

// ? Update Gallery

const editGallery = async (
  id: string,
  payload: Partial<IGallery>
): Promise<IGallery | null> => {
  const result = await Gallery.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const GalleryService = {
  createGallery,
  getAllGallery,
  getActiveGallery,
  editGallery,
};
