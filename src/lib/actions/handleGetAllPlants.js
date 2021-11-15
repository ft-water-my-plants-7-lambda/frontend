import { resetErrors, startAPICall, updatePlants, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleGetAllPlants = () => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const plants = await services.getPlants()

    dispatch(updatePlants(plants))

    return plants
  } catch (err) {
    dispatch(handleError({ error: 'get', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
