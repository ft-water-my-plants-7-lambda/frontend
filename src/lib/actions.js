import axios from 'axios'

import { services } from '../services'

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

const loginSuccess = ({ username, phoneNumber }) => ({
  type: ACTIONS.LOGIN_SUCCESS,
  payload: { username, phoneNumber },
})
const logoutSuccess = () => ({ type: ACTIONS.LOGOUT_SUCCESS })

const updatePlants = (plants) => ({ type: ACTIONS.HANDLE_ERROR, payload: plants })

// pass an object i.e. { error: 'update', value: '404' }
// error should have value from 'validation', 'create', 'update', or 'delete'
// value should be the text of the error i.e. '404 - page not found'
const handleError = ({ error, message }) => ({
  type: ACTIONS.HANDLE_ERROR,
  payload: { error, message },
})

// THUNK FUNCTIONS

export const handleLogin = (user) => async (dispatch) => {
  dispatch(startAPICall())

  try {
    const { username, phoneNumber } = services.login(user)

    dispatch(loginSuccess({ username, phoneNumber }))
  } catch (err) {
    dispatch(handleError({ error: 'validation', message: err.message }))
  }

  dispatch(endAPICall())
}
