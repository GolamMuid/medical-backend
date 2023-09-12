import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { GalleryController } from './gallery.controller';
import { GalleryValidation } from './gallery.validation';

const router = express.Router();

router.post(
  '/create-gallery',
  validateRequest(GalleryValidation.createGalleryZodSchema),
  GalleryController.createGallery
);

router.patch(
  '/:id',
  validateRequest(GalleryValidation.updateGalleryZodSchema),
  GalleryController.editGallery
);

router.get('/get-all-gallery', GalleryController.getAllGallery);

router.get('/get-active-gallery', GalleryController.getActiveGallery);

export const GalleryRoutes = router;
