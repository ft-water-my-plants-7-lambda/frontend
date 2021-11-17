import { resetError, startAPICall, editPlant, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleEditPlant = (plant) => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    const res = await services.editPlant(plant);
    dispatch(editPlant(res.data));
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
