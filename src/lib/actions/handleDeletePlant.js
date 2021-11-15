import { resetErrors, startAPICall, deletePlant, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleDeletePlant = (plantId) => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const deletedPlant = await services.deletePlant(plantId)

    dispatch(deletePlant(plantId))

    return deletedPlant
  } catch (err) {
    dispatch(handleError({ error: 'delete', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
