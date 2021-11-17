export const ACTIONS = {
  INIT: 'INIT',
  RESET_ERRORS: 'RESET_ERRORS',
  START_API_CALL: 'START_API_CALL',
  END_API_CALL: 'END_API_CALL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  UPDATE_USER: 'UPDATE_USER',
  SET_PLANTS: 'SET_PLANTS',
  ADD_PLANT: 'ADD_PLANT',
  HANDLE_ERROR: 'HANDLE_ERROR',
};

export const init = (user) => ({ type: ACTIONS.INIT, payload: user });

export const resetErrors = () => ({ type: ACTIONS.RESET_ERRORS });

export const startAPICall = () => ({ type: ACTIONS.START_API_CALL });
export const endAPICall = () => ({ type: ACTIONS.END_API_CALL });

export const loginSuccess = (user) => ({ type: ACTIONS.LOGIN_SUCCESS, payload: user });
export const logoutSuccess = () => ({ type: ACTIONS.LOGOUT_SUCCESS });
export const updateUser = (user) => ({ type: ACTIONS.UPDATE_USER, payload: user });

//  sets state.plants to plants[]
export const setPlants = (plants) => ({ type: ACTIONS.SET_PLANTS, payload: plants });
//  appends plant to state.plants
export const addPlants = (plant) => ({ type: ACTIONS.ADD_PLANTS, payload: plant });

// pass an object i.e. { value: 'update', message: '404' }
// value should have value of 'validation', 'create', 'update', or 'delete'
// message should be the text of the error i.e. '404 - page not found'
export const handleError = (error) => ({
  type: ACTIONS.HANDLE_ERROR,
  payload: error,
});
