import { resetErrors, startAPICall, setPlants, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleGetAllPlants = () => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const { data } = await services.getAllPlants();
    dispatch(setPlants(data));
  } catch (err) {
    dispatch(handleError({ value: 'get', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
