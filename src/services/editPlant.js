import axiosWithAuth from '../utils/axiosWithAuth';

export const editPlant = async (plant) => {
  try {
    const res = await axiosWithAuth().put(`/plants/${plant.plant_id}`, plant);
    console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};
