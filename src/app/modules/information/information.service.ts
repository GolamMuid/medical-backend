import { IInformation } from './information.interface';
import { Information } from './information.model';

// ? Create Information

const createInformation = async (
  payload: IInformation
): Promise<IInformation | null> => {
  const result = await Information.create(payload);
  return result;
};

// ? Get All Information

const getAllInformation = async (): Promise<IInformation[] | null> => {
  const result = await Information.find();
  return result;
};

// ? Get Active Information

const getActiveInformation = async (): Promise<IInformation[] | null> => {
  const result = await Information.find({ activeStatus: true });
  return result;
};

// ? Update Information

const updateInformation = async (
  id: string,
  payload: IInformation
): Promise<IInformation | null> => {
  const result = await Information.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const InformationService = {
  createInformation,
  getAllInformation,
  getActiveInformation,
  updateInformation,
};
