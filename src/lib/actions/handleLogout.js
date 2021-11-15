import { startAPICall, logoutSuccess, handleError, endAPICall } from '.'
import { services } from '../../services'

export const handleLogout = (user) => async (dispatch) => {
  dispatch(startAPICall())

  try {
    await services.logout(user)

    dispatch(logoutSuccess())
  } catch (err) {
    dispatch(handleError({ error: 'validation', message: err.message }))
  }

  dispatch(endAPICall())
}
