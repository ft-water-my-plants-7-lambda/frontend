import { startAPICall, updatePlants, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleCreatePlant = (user) => async (dispatch) => {
  dispatch(startAPICall())

  try {
    const plants = await services.updatePlant(user)

    dispatch(updatePlants(plants))
  } catch (err) {
    dispatch(handleError({ error: 'update', message: err.message }))
  }

  dispatch(endAPICall())
}
