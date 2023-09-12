import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncHandler from '../../../shared/asyncHandler';
import sendResponse from '../../../shared/sendResponse';
import { IGallery } from './gallery.interface';
import { GalleryService } from './gallery.service';

//? Create Gallery

const createGallery = asyncHandler(async (req: Request, res: Response) => {
  const { ...galleryData } = req.body;
  const result = await GalleryService.createGallery(galleryData);

  sendResponse<IGallery>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gallery created successfully!',
    data: result,
  });
});

//? Get All Galleries

const getAllGallery = asyncHandler(async (req: Request, res: Response) => {
  const result = await GalleryService.getAllGallery();

  sendResponse<IGallery[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Gallery retrieved successfully!',
    data: result,
  });
});

//? Get All Galleries

const getActiveGallery = asyncHandler(async (req: Request, res: Response) => {
  const result = await GalleryService.getActiveGallery();

  sendResponse<IGallery[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Active Gallery retrieved successfully!',
    data: result,
  });
});

//? Upadte Gallery

const editGallery = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const { ...galleryData } = req.body;
  const result = await GalleryService.editGallery(id, galleryData);

  sendResponse<IGallery>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gallery updated successfully!',
    data: result,
  });
});

export const GalleryController = {
  createGallery,
  getAllGallery,
  getActiveGallery,
  editGallery,
};
