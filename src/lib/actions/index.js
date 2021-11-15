export const ACTIONS = {
  RESET_ERRORS: 'RESET_ERRORS',
  START_API_CALL: 'START_API_CALL',
  END_API_CALL: 'END_API_CALL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  HANDLE_ERROR: 'HANDLE_ERROR',
}

export const resetErrors = () => ({ type: ACTIONS.RESET_ERRORS })

export const startAPICall = () => ({ type: ACTIONS.START_API_CALL })
export const endAPICall = () => ({ type: ACTIONS.END_API_CALL })

export const loginSuccess = ({ username, phoneNumber }) => ({
  type: ACTIONS.LOGIN_SUCCESS,
  payload: { username, phoneNumber },
})
export const logoutSuccess = () => ({ type: ACTIONS.LOGOUT_SUCCESS })

export const updatePlants = (plants) => ({ type: ACTIONS.HANDLE_ERROR, payload: plants })

// pass an object i.e. { error: 'update', value: '404' }
// error should have value from 'validation', 'create', 'update', or 'delete'
// value should be the text of the error i.e. '404 - page not found'
export const handleError = ({ error, message }) => ({
  type: ACTIONS.HANDLE_ERROR,
  payload: { error, message },
})
