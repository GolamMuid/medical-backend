import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncHandler from '../../../shared/asyncHandler';
import sendResponse from '../../../shared/sendResponse';
import { IBanner } from './banner.interface';
import { BannerService } from './banner.service';

//? Create Banner

const createBanner = asyncHandler(async (req: Request, res: Response) => {
  const { ...bannerData } = req.body;
  const result = await BannerService.createBanner(bannerData);

  sendResponse<IBanner>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Banner created successfully!',
    data: result,
  });
});

//? Get All Banners

const getAllBanners = asyncHandler(async (req: Request, res: Response) => {
  const result = await BannerService.getAllBanners();

  sendResponse<IBanner[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Banners retrieved successfully!',
    data: result,
  });
});

//? Get All Banners

const getActiveBanners = asyncHandler(async (req: Request, res: Response) => {
  const result = await BannerService.getActiveBanners();

  sendResponse<IBanner[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Active Banners retrieved successfully!',
    data: result,
  });
});

//? Upadte Banner

const editBanner = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const { ...bannerData } = req.body;
  const result = await BannerService.editBanner(id, bannerData);

  sendResponse<IBanner>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Banner updated successfully!',
    data: result,
  });
});

export const BannerController = {
  createBanner,
  getAllBanners,
  getActiveBanners,
  editBanner,
};
