import axios from 'axios'

import { API_URL } from '../config'

export const register = async (user) => {
  try {
    return await axios.post(`${API_URL}/users/signup`, user)
  } catch (err) {
    return err
  }
}
