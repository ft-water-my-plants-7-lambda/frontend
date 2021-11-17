import axiosWithAuth from '../utils/axiosWithAuth';

export const updatePlant = async (plant) => {
  const { id: plantId } = plant;

  try {
    return await axiosWithAuth().put(`/plants/${plantId}`, plant);
  } catch (err) {
    return err;
  }
};
