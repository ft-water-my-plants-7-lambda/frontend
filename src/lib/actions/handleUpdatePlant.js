import { resetError, startAPICall, updatePlants, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleUpdatePlant = (plant) => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    const plants = await services.updatePlant(plant);

    dispatch(updatePlants(plants));

    return plants;
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
