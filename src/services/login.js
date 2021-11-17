import axios from 'axios';

import { API_URL } from '../config';

export const login = async (user) => {
  try {
    const res = await axios.post(`${API_URL}/users/login`, user);
    console.log(res);

    const { data } = res;

    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.id);
    localStorage.setItem('username', data.username);
    localStorage.setItem('phoneNumber', data.phoneNumber);

    return res;
  } catch (err) {
    return err;
  }
};
