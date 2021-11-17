import { resetErrors, startAPICall, updateUser, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleUpdateUser = (user) => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const updatedUser = await services.updateUser(user);

    dispatch(updateUser(user));
  } catch (err) {
    dispatch(handleError({ value: 'update', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
