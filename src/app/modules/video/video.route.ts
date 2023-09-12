import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { VideoController } from './video.controller';
import { VideoValidation } from './video.validation';

const router = express.Router();

router.post(
  '/create-video',
  validateRequest(VideoValidation.createVideoZodSchema),
  VideoController.createVideo
);

router.patch(
  '/:id',
  validateRequest(VideoValidation.updateVideoZodSchema),
  VideoController.editVideo
);

router.get('/get-all-videos', VideoController.getAllVideo);

router.get('/get-active-videos', VideoController.getActiveVideo);

export const VideoRoutes = router;
