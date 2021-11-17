import { resetError, startAPICall, loginSuccess, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleLogin = (user) => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    const { username, phoneNumber, user_id } = await services.login(user);

    dispatch(loginSuccess({ username, phoneNumber, user_id }));

    return { username, phoneNumber };
  } catch (err) {
    console.log(err);
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
