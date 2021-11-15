import { resetErrors, startAPICall, updatePlants, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleUpdatePlant = (plant) => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const plants = await services.updatePlant(plant)

    dispatch(updatePlants(plants))

    return plants
  } catch (err) {
    dispatch(handleError({ error: 'update', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
