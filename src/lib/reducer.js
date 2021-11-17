import { ACTIONS } from './actions';

const initialState = {
  user: {
    isAuthenticated: false,
    user_id: null,
    username: null,
    phoneNumber: null,
  },
  plants: [],
  isLoading: false,
  errors: {
    validation: '',
    create: '',
    read: '',
    update: '',
    delete: '',
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          user_id: action.payload.user_id,
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber,
        },
      };

    case ACTIONS.RESET_ERRORS:
      return {
        ...state,
        errors: {
          validation: '',
          create: '',
          update: '',
          delete: '',
        },
      };

    case ACTIONS.START_API_CALL:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.END_API_CALL:
      return {
        ...state,
        isLoading: false,
      };

    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          user_id: action.payload.user_id,
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber,
        },
      };

    case ACTIONS.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: false,
          user_id: null,
          username: null,
          phoneNumber: null,
        },
      };

    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          user_id: action.payload.user_id,
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber,
        },
      };

    case ACTIONS.SET_PLANTS:
      return {
        ...state,
        plants: action.payload,
      };

    case ACTIONS.ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload],
      };

    case ACTIONS.UPDATE_PLANT:
      const { plant: plantData } = action.payload;
      return {
        ...state,
        plants: state.plants.map((plant) => (plant.id === plantData.plant_id ? plantData : plant)),
      };

    case ACTIONS.DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.plant_id !== action.payload),
      };

    case ACTIONS.HANDLE_ERROR:
      const [error, message] = action.payload;

      return {
        ...state,
        errors: {
          ...state.errors,
          [error]: message,
        },
      };

    default:
      return state;
  }
};
