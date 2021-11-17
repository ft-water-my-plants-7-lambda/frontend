import axiosWithAuth from '../utils/axiosWithAuth';

export const deletePlant = (plantId) => {
  try {
    const { data } = axiosWithAuth().delete(`/plants/${plantId}`);
    return data;
  } catch (err) {
    return err;
  }
};
