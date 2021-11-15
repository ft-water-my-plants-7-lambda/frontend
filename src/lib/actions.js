import axios from 'axios'

export const ACTIONS = {
  RESET_ERRORS: 'RESET_ERRORS',
  START_API_CALL: 'START_API_CALL',
  END_API_CALL: 'END_API_CALL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  HANDLE_ERROR: 'HANDLE_ERROR',
}

const resetErrors = () => ({ type: ACTIONS.RESET_ERRORS })

const startAPICall = () => ({ type: ACTIONS.START_API_CALL })
const endAPICall = () => ({ type: ACTIONS.END_API_CALL })

const loginSuccess = () => ({ type: ACTIONS.LOGIN_SUCCESS })
const logoutSuccess = () => ({ type: ACTIONS.LOGOUT_SUCCESS })

const updatePlants = (plants) => ({ type: ACTIONS.HANDLE_ERROR, payload: plants })

// pass an object i.e. { error: 'update', value: '404' }
// error should have value from 'validation', 'create', 'update', or 'delete'
// value should be the text of the error i.e. '404 - page not found'
const handleError = ({ error, value }) => ({
  type: ACTIONS.HANDLE_ERROR,
  payload: { error, value },
})

export const handleLogin = (user) => (dispatch) => {
  dispatch(startAPICall())

  dispatch(endAPICall())
}
