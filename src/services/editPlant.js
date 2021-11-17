import axiosWithAuth from '../utils/axiosWithAuth';

export const editPlant = (plant) => {
  try {
    const { data } = axiosWithAuth().put(`/plants/${plant.id}`, plant);
    return data;
  } catch (err) {
    return err;
  }
};
