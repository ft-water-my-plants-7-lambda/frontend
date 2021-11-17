import { resetError, startAPICall, updateUser, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleUpdateUser = (userId, user) => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    await services.updateUser(userId, user);

    dispatch(updateUser(user));
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
