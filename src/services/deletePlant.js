import axiosWithAuth from '../utils/axiosWithAuth';

export const deletePlant = async (plantId) => {
  try {
    const { data } = await axiosWithAuth().delete(`/plants/${plantId}`);
    return data;
  } catch (err) {
    throw new Error('delete plant error');
  }
};
