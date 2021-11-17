import axiosWithAuth from '../utils/axiosWithAuth';

export const editPlant = (plant) => {
  try {
    return axiosWithAuth().put(`/plants/${plant.id}`, plant);
  } catch (err) {
    return err;
  }
};
