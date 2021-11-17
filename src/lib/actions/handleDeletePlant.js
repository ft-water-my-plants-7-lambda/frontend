import { resetErrors, startAPICall, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleDeletePlant = (plantId, callback) => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const deletedPlant = await services.deletePlant(plantId)

    callback(deletedPlant)
  } catch (err) {
    dispatch(handleError({ value: 'delete', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
