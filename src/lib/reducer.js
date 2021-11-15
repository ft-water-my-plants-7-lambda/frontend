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
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
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
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber,
        },
      }

    case ACTIONS.UPDATE_PLANTS:
      return {
        ...state,
        plants: [...state.plants, action.payload],
      }

    case ACTIONS.DELETE_PLANT:
      const plants = state.plants.filter((plant) => plant.id !== action.payload)

      return {
        ...state,
        plants: plants,
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
