import axiosWithAuth from '../utils/axiosWithAuth';

export const updateUser = async (userId, user) => {
  try {
    const data = await axiosWithAuth().put(`/users/${userId}`, user);

    localStorage.setItem('username', data.username);
    localStorage.setItem('phoneNumber', data.phoneNumber);

    return data;
  } catch (err) {
    return err;
  }
};
