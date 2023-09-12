import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncHandler from '../../../shared/asyncHandler';
import sendResponse from '../../../shared/sendResponse';
import { IVideo } from './video.interface';
import { VideoService } from './video.service';

//? Create Video

const createVideo = asyncHandler(async (req: Request, res: Response) => {
  const { ...videoData } = req.body;
  const result = await VideoService.createVideo(videoData);

  sendResponse<IVideo>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Video created successfully!',
    data: result,
  });
});

//? Get All Videos

const getAllVideo = asyncHandler(async (req: Request, res: Response) => {
  const result = await VideoService.getAllVideos();

  sendResponse<IVideo[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All videos retrieved successfully!',
    data: result,
  });
});

//? Get All Galleries

const getActiveVideo = asyncHandler(async (req: Request, res: Response) => {
  const result = await VideoService.getActiveVideos();

  sendResponse<IVideo[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Active Video retrieved successfully!',
    data: result,
  });
});

//? Upadte Video

const editVideo = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const { ...videoData } = req.body;
  const result = await VideoService.editVideo(id, videoData);

  sendResponse<IVideo>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Video updated successfully!',
    data: result,
  });
});

export const VideoController = {
  createVideo,
  getAllVideo,
  getActiveVideo,
  editVideo,
};
