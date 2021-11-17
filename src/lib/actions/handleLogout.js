import { resetErrors, startAPICall, logoutSuccess, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleLogout = () => async (dispatch) => {
  dispatch(resetErrors());
  dispatch(startAPICall());

  try {
    await services.logout();
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(handleError({ value: 'validation', message: err.message }));
  } finally {
    dispatch(endAPICall());
  }
};
