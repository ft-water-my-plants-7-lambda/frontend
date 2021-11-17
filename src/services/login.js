import axios from 'axios'

import { API_URL } from '../config'

export const login = async (user) => {
  try {
    const res = await axios.post(`${API_URL}/users/login`, user)

    localStorage.setItem('token', res.token)
    localStorage.setItem('id', res.id)
    localStorage.setItem('username', res.username)
    localStorage.setItem('phoneNumber', res.phoneNumber)

    return res
  } catch (err) {
    return err
  }
}
