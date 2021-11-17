import axiosWithAuth from '../utils/axiosWithAuth';

export const deletePlant = (plantId) => {
  try {
    return axiosWithAuth().delete(`/plants/${plantId}`);
  } catch (err) {
    return err;
  }
};
