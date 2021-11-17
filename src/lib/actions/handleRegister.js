import { resetErrors, startAPICall, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleRegister = (user) => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const { username, phoneNumber } = await services.register(user)

    return { username, phoneNumber }
  } catch (err) {
    dispatch(handleError({ value: 'validation', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
