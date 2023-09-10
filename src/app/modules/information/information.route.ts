import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { InformationController } from './information.controller';
import { InformationValidation } from './information.validation';

const router = express.Router();

router.post(
  '/create-information',
  validateRequest(InformationValidation.createInformationZodSchema),
  InformationController.createInformation
);

router.patch(
  '/:id',
  validateRequest(InformationValidation.updateInformationZodSchema),
  InformationController.updateInformation
);

router.get('/get-all-information', InformationController.getAllInformation);

router.get(
  '/get-active-information',
  InformationController.getActiveInformation
);

export const InformationRoutes = router;
