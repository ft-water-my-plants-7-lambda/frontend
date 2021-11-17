import axiosWithAuth from '../utils/axiosWithAuth';

export const createPlant = async (plant) => {
  try {
    const { data } = await axiosWithAuth().post('/plants', plant);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
