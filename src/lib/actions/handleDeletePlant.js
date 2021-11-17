import { resetError, startAPICall, deletePlant, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleDeletePlant = (plantId) => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    const { deletedPlant } = await services.deletePlant(plantId);
    dispatch(deletePlant(deletedPlant.plant_id));
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
