import axiosWithAuth from '../utils/axiosWithAuth';

export const updateUser = async (user) => {
  try {
    const { id: userId } = user;

    const res = await axiosWithAuth().put(`/users/${userId}`, user);

    console.log(res);

    return res;
  } catch (err) {
    return err;
  }
};
