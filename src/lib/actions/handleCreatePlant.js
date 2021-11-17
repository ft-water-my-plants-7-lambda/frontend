import { resetError, startAPICall, addPlant, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleCreatePlant = (plant) => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    const plantData = await services.createPlant(plant);
    dispatch(addPlant(plantData));
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
