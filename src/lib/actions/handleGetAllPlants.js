import { resetError, startAPICall, setPlants, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleGetAllPlants = () => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    const data = await services.getAllPlants();
    dispatch(setPlants(data));
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
