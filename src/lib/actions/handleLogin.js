import { startAPICall, loginSuccess, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleLogin = (user) => async (dispatch) => {
  dispatch(startAPICall())

  try {
    const { username, phoneNumber } = await services.login(user)

    dispatch(loginSuccess({ username, phoneNumber }))
  } catch (err) {
    dispatch(handleError({ error: 'validation', message: err.message }))
  }

  dispatch(endAPICall())
}
