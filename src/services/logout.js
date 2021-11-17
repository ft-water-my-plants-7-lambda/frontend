import axiosWithAuth from '../utils/axiosWithAuth';

export const logout = async (user) => {
  try {
    const res = await axiosWithAuth().get('/users/logout');

    localStorage.removeItem('token');

    return res;
  } catch (err) {
    return err;
  }
};
