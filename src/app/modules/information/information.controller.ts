import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncHandler from '../../../shared/asyncHandler';
import sendResponse from '../../../shared/sendResponse';
import { IInformation } from './information.interface';
import { InformationService } from './information.service';

// ? Create Our Service

const createInformation = asyncHandler(async (req: Request, res: Response) => {
  const { ...informationData } = req.body;
  const result = await InformationService.createInformation(informationData);

  sendResponse<IInformation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Information created successfully!',
    data: result,
  });
});

// ? Get All Information

const getAllInformation = asyncHandler(async (req: Request, res: Response) => {
  const result = await InformationService.getAllInformation();

  sendResponse<IInformation[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Information retrieved successfully',
    data: result,
  });
});

// ? Get Active Information

const getActiveInformation = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await InformationService.getActiveInformation();

    sendResponse<IInformation[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Active Information retrieved successfully',
      data: result,
    });
  }
);

// ? Create Our Service

const updateInformation = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...informationData } = req.body;
  const result = await InformationService.updateInformation(
    id,
    informationData
  );

  sendResponse<IInformation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Information updated successfully!',
    data: result,
  });
});

export const InformationController = {
  createInformation,
  getAllInformation,
  getActiveInformation,
  updateInformation,
};
