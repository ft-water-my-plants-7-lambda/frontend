import axiosWithAuth from '../utils/axiosWithAuth'

export const getPlant = async (plantId) => {
  try {
    return await axiosWithAuth().get(`/plants/${plantId}`)
  } catch (err) {
    return err
  }
}
