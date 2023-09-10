import { IBanner } from './banner.interface';
import { Banner } from './banner.model';

// ? Create Banner

const createBanner = async (payload: IBanner): Promise<IBanner | null> => {
  const result = await Banner.create(payload);
  return result;
};

// ? Get All Banners

const getAllBanners = async (): Promise<IBanner[] | null> => {
  const result = await Banner.find();
  return result;
};

// ? Get Active Banners

const getActiveBanners = async (): Promise<IBanner[] | null> => {
  const result = await Banner.find({ activeStatus: true });
  return result;
};

// ? Update Banner

const editBanner = async (
  id: string,
  payload: Partial<IBanner>
): Promise<IBanner | null> => {
  const result = await Banner.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const BannerService = {
  createBanner,
  getAllBanners,
  getActiveBanners,
  editBanner,
};
