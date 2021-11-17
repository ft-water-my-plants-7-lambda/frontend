import { resetError, startAPICall, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleGetPlantById = (plantId, callback) => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    const data = await services.getPlantById(plantId);
    callback(data);
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
