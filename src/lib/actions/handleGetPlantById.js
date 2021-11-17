import { resetErrors, startAPICall, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleGetPlantById = (plantId, callback) => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const plant = await services.getPlant(plantId)

    callback(plant)
  } catch (err) {
    dispatch(handleError({ value: 'get', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
