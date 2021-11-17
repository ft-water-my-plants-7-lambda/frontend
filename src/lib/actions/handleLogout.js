import { resetError, startAPICall, logoutSuccess, handleError, endAPICall } from '.';
import { services } from '../../services';

export const handleLogout = () => async (dispatch) => {
  dispatch(resetError());
  dispatch(startAPICall());

  try {
    await services.logout();
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(handleError(err));
  } finally {
    dispatch(endAPICall());
  }
};
