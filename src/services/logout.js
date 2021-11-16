import axiosWithAuth from '../utils/axiosWithAuth'

export const logout = async (user) => {
  try {
    const { data } = await axiosWithAuth().get('/users/logout')

    localStorage.removeItem('token')

    return data
  } catch (err) {
    return err
  }
}
