import { resetError, init } from '.';

export const handleInit = () => async (dispatch) => {
  if (!localStorage.getItem('token')) return;

  resetError();

  const username = localStorage.getItem('username');
  const phoneNumber = localStorage.getItem('phoneNumber');
  const id = localStorage.getItem('id');

  dispatch(init({ username, phoneNumber, id }));
};
