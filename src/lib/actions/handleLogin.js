import { resetErrors, startAPICall, loginSuccess, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleLogin = (user) => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    const { username, phoneNumber, id } = await services.login(user);

    dispatch(loginSuccess({ username, phoneNumber, id }));

    return { username, phoneNumber };
  } catch (err) {
    dispatch(handleError({ value: 'validation', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
