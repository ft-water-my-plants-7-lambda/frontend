import { startAPICall, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleGetPlantById = (plantId) => async (dispatch) => {
  dispatch(startAPICall())

  try {
    const plant = await services.getPlant(plantId)

    return plant
  } catch (err) {
    dispatch(handleError({ error: 'get', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
