import { startAPICall, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleSignup = (user) => async (dispatch) => {
  dispatch(startAPICall())

  try {
    await services.signup(user)
  } catch (err) {
    dispatch(handleError({ error: 'validation', message: err.message }))
  }

  dispatch(endAPICall())
}
