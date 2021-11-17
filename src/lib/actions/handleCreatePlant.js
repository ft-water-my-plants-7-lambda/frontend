import { resetErrors, startAPICall, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleCreatePlant = (plant, callback) => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const plants = await services.updatePlant(plant)

    callback(plants)
  } catch (err) {
    dispatch(handleError({ value: 'create', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
