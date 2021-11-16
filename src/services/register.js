import axios from 'axios'

import { API_URL } from '../config'

export const register = async (user) => {
  try {
    const { data } = await axios.post(`${API_URL}/users/signup`, user)

    return data
  } catch (err) {
    return err
  }
}
