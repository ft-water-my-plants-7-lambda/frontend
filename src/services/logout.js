import axiosWithAuth from '../utils/axiosWithAuth';

export const logout = async () => {
  try {
    await axiosWithAuth().get('/users/logout');

    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
    localStorage.removeItem('phoneNumber');
  } catch (err) {
    return err;
  }
};
