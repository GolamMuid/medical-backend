import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BannerController } from './banner.controller';
import { BannerValidation } from './banner.validation';

const router = express.Router();

router.patch(
  '/:id',
  validateRequest(BannerValidation.updateBannerZodSchema),
  BannerController.editBanner
);

router.post(
  '/create-banner',
  validateRequest(BannerValidation.createBannerZodSchema),
  BannerController.createBanner
);

router.get('/get-all-banners', BannerController.getAllBanners);

router.get('/get-active-banners', BannerController.getActiveBanners);

export const BannerRoutes = router;
