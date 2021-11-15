import { ACTIONS } from './actions'

const initialState = {
  user: {
    isAuthenticated: false,
    username: '',
    phoneNumber: '',
  },
  plants: [],
  isLoading: false,
  errors: {
    validation: '',
    create: '',
    update: '',
    delete: '',
  },
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.RESET_ERRORS:
      return {
        ...state,
        errors: {
          validation: '',
          create: '',
          update: '',
          delete: '',
        },
      }

    case ACTIONS.START_API_CALL:
      return {
        ...state,
        isLoading: true,
      }

    case ACTIONS.END_API_CALL:
      return {
        ...state,
        isLoading: false,
      }

    case ACTIONS.LOGIN_SUCCESS:
      const { username, phoneNumber } = action.payload

      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          username: username,
          phoneNumber: phoneNumber,
        },
      }

    case ACTIONS.HANDLE_ERROR:
      const [error, value] = action.payload

      return {
        ...state,
        errors: {
          ...state.errors,
          [error]: value,
        },
      }

    default:
      return state
  }
}
