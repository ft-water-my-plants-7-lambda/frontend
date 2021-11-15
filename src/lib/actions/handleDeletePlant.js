import { startAPICall, deletePlant, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleDeletePlant = (plantId) => async (dispatch) => {
  dispatch(startAPICall())

  try {
    await services.deletePlant(plantId)

    dispatch(deletePlant(plantId))
  } catch (err) {
    dispatch(handleError({ error: 'delete', message: err.message }))
  }

  dispatch(endAPICall())
}
