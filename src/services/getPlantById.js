import axiosWithAuth from '../utils/axiosWithAuth';

export const getPlantById = async (plantId) => {
  try {
    const { data } = await axiosWithAuth().get(`/plants/${plantId}`);
    return data;
  } catch (err) {
    throw new Error('get plant by id error');
  }
};
