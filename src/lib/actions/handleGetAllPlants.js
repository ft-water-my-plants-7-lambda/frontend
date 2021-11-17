import { resetErrors, startAPICall, setPlants, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleGetAllPlants = () => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const { data: plants } = await services.getPlants();

    dispatch(setPlants(plants));
  } catch (err) {
    dispatch(handleError({ value: 'get', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
