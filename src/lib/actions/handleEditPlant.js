import { resetErrors, startAPICall, updatePlant, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleEditPlant = (plant) => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const { plantData } = await services.updatePlant(plant);
    dispatch(updatePlant(plantData));
  } catch (err) {
    dispatch(handleError({ value: 'create', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
