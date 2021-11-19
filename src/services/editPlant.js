import axiosWithAuth from '../utils/axiosWithAuth';

export const editPlant = async (plant) => {
  try {
    const res = await axiosWithAuth().put(`/plants/${plant.plant_id}`, plant);
    return res;
  } catch (err) {
    throw new Error('edit plant error');
  }
};
