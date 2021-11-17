import { ACTIONS } from './actions'

const initialState = {
  user: {
    isAuthenticated: false,
    id: '',
    username: '',
    phoneNumber: '',
  },
  isLoading: false,
  errors: {
    validation: '',
    create: '',
    read: '',
    update: '',
    delete: '',
  },
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          id: action.payload.id,
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber,
        },
      }

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
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          id: action.payload.id,
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber,
        },
      }

    case ACTIONS.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: false,
          username: '',
          phoneNumber: '',
        },
      }

    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber,
        },
      }

    case ACTIONS.HANDLE_ERROR:
      const [error, message] = action.payload

      return {
        ...state,
        errors: {
          ...state.errors,
          [error]: message,
        },
      }

    default:
      return state
  }
}
