import { resetErrors, startAPICall, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleSignup = (user) => async (dispatch) => {
  dispatch(resetErrors())
  dispatch(startAPICall())

  try {
    const { username, phoneNumber } = await services.signup(user)

    return { username, phoneNumber }
  } catch (err) {
    dispatch(handleError({ error: 'validation', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
