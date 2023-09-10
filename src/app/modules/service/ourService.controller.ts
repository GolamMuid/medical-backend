import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncHandler from '../../../shared/asyncHandler';
import sendResponse from '../../../shared/sendResponse';
import { IOurService } from './ourService.interface';
import { OurServiceService } from './ourService.service';

// ? Create Our Service

const createOurService = asyncHandler(async (req: Request, res: Response) => {
  const { ...ourServiceData } = req.body;
  const result = await OurServiceService.createService(ourServiceData);

  sendResponse<IOurService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Banner created successfully!',
    data: result,
  });
});

export const ourServiceController = {
  createOurService,
};
