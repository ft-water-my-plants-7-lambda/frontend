import axiosWithAuth from '../utils/axiosWithAuth';

export const updateUser = async (user) => {
  try {
    const { data } = await axiosWithAuth().put(`/users/${user.id}`, user);

    localStorage.setItem('user_id', data.user_id);
    localStorage.setItem('username', data.username);
    localStorage.setItem('phoneNumber', data.phoneNumber);

    return data;
  } catch (err) {
    return err;
  }
};
