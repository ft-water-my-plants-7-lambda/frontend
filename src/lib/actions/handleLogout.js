import { startAPICall, logoutSuccess, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleLogout = (user) => async (dispatch) => {
  dispatch(startAPICall())

  try {
    const { username, phoneNumber } = await services.logout(user)

    dispatch(logoutSuccess())

    return { username, phoneNumber }
  } catch (err) {
    dispatch(handleError({ error: 'validation', message: err.message }))
  } finally {
    dispatch(endAPICall())
  }
}
