// ? Create Video

import { IVideo } from './video.interface';
import { Video } from './video.model';

const createVideo = async (payload: IVideo): Promise<IVideo | null> => {
  const result = await Video.create(payload);
  return result;
};

// ? Get All Videos

const getAllVideos = async (): Promise<IVideo[] | null> => {
  const result = await Video.find();
  return result;
};

// ? Get Active Videos

const getActiveVideos = async (): Promise<IVideo[] | null> => {
  const result = await Video.find({ activeStatus: true });
  return result;
};

// ? Update Video

const editVideo = async (
  id: string,
  payload: Partial<IVideo>
): Promise<IVideo | null> => {
  const result = await Video.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const VideoService = {
  createVideo,
  getAllVideos,
  getActiveVideos,
  editVideo,
};
