import axios from 'axios';

import { API_URL } from '../config';

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${API_URL}/users/login`, user);

    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user_id);
    localStorage.setItem('username', data.username);
    localStorage.setItem('phoneNumber', data.phoneNumber);

    return data;
  } catch (err) {
    throw new Error('login error');
  }
};
