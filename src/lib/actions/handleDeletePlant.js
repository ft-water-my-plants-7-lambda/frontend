import { resetErrors, startAPICall, deletePlant, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleDeletePlant = (plantId) => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    await services.deletePlant(plantId);
    dispatch(deletePlant(plantId));
  } catch (err) {
    dispatch(handleError({ value: 'delete', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
