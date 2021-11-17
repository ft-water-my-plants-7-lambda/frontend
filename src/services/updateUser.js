import axiosWithAuth from '../utils/axiosWithAuth';

export const updateUser = async (user) => {
  try {
    const { data } = await axiosWithAuth().put(`/users/${user.id}`, user);
    return data;
  } catch (err) {
    return err;
  }
};
