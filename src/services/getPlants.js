import axiosWithAuth from '../utils/axiosWithAuth'

export const getPlants = async () => {
  try {
    return await axiosWithAuth().get('/plants')
  } catch (err) {
    return err
  }
}
