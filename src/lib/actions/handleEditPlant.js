import { resetErrors, startAPICall, editPlant, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleEditPlant = (plant) => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const res = await services.editPlant(plant);
    dispatch(editPlant(res.data));
  } catch (err) {
    dispatch(handleError({ value: 'create', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
