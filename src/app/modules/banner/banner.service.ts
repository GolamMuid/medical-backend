import { IBanner } from './banner.interface';
import { Banner } from './banner.model';

// ? Create Banner

const createBanner = async (payload: IBanner): Promise<IBanner | null> => {
  const result = await Banner.create(payload);
  return result;
};

export const BannerService = {
  createBanner,
};
