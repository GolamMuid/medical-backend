import { IOurService } from './ourService.interface';
import { OurService } from './ourService.model';

// ? Create Service

const createService = async (
  payload: IOurService
): Promise<IOurService | null> => {
  const result = await OurService.create(payload);
  return result;
};

export const OurServiceService = {
  createService,
};
