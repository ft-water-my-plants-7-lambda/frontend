import axiosWithAuth from '../utils/axiosWithAuth';

export const getAllPlants = async () => {
  try {
    const { data } = await axiosWithAuth().get('/plants');
    return data;
  } catch (err) {
    throw new Error('get all plants error');
  }
};
