import { resetErrors, startAPICall, addPlant, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleGetPlantById = (plantId, callback) => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const { data: plant } = await services.getPlant(plantId);

    dispatch(addPlant(plant));
  } catch (err) {
    dispatch(handleError({ value: 'get', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
