import { resetError, startAPICall, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleRegister = (user) => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    const { username, phoneNumber } = await services.register(user);

    return { username, phoneNumber };
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
