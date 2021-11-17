import { resetErrors, startAPICall, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleGetAllPlants = (callback) => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const plants = await services.getPlants()

    callback(plants)
  } catch (err) {
    dispatch(handleError({ value: 'get', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
