import { resetErrors, startAPICall, addPlant, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleCreatePlant = (plant) => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const plantData = await services.createPlant(plant);
    dispatch(addPlant(plantData));
  } catch (err) {
    dispatch(handleError({ value: 'create', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
