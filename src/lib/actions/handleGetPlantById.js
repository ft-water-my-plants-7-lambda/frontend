import { resetErrors, startAPICall, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleGetPlantById = (plantId, callback) => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const { data } = await services.getPlantById(plantId);
    callback(data);
  } catch (err) {
    dispatch(handleError({ value: 'get', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
