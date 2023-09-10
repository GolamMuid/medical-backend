import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ourServiceController } from './ourService.controller';
import { OurServiceValidation } from './ourService.validation';

const router = express.Router();

router.post(
  '/create-our-service',
  validateRequest(OurServiceValidation.updateOurServiceZodSchema),
  ourServiceController.createOurService
);

export const ourServiceRoutes = router;
