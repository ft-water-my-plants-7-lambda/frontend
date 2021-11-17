import axios from 'axios';

import { API_URL } from '../config';

export const register = async (user) => {
  try {
    await axios.post(`${API_URL}/users/register`, user);
  } catch (err) {
    return err;
  }
};
