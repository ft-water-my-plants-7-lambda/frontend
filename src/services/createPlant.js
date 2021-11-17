import axiosWithAuth from '../utils/axiosWithAuth';

export const createPlant = async (plant) => {
  try {
    return await axiosWithAuth().post('/plants', plant);
  } catch (err) {
    return err;
  }
};
