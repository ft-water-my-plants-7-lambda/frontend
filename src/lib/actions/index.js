export const ACTIONS = {
  INIT: 'INIT',

  START_API_CALL: 'START_API_CALL',
  END_API_CALL: 'END_API_CALL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  UPDATE_USER: 'UPDATE_USER',
  SET_PLANTS: 'SET_PLANTS',
  ADD_PLANT: 'ADD_PLANT',
  EDIT_PLANT: 'EDIT_PLANT',
  DELETE_PLANT: 'DELETE_PLANT',
  RESET_ERROR: 'RESET_ERROR',
  HANDLE_ERROR: 'HANDLE_ERROR',
};

export const init = (user) => ({ type: ACTIONS.INIT, payload: user });

export const resetError = () => ({ type: ACTIONS.RESET_ERROR });

export const startAPICall = () => ({ type: ACTIONS.START_API_CALL });
export const endAPICall = () => ({ type: ACTIONS.END_API_CALL });

export const loginSuccess = (user) => ({ type: ACTIONS.LOGIN_SUCCESS, payload: user });
export const logoutSuccess = () => ({ type: ACTIONS.LOGOUT_SUCCESS });
export const updateUser = (user) => ({ type: ACTIONS.UPDATE_USER, payload: user });

//  sets state.plants to plants[]
export const setPlants = (plants) => ({ type: ACTIONS.SET_PLANTS, payload: plants });
//  appends plant to state.plants
export const addPlant = (plant) => ({ type: ACTIONS.ADD_PLANT, payload: plant });
export const editPlant = (plant) => ({ type: ACTIONS.EDIT_PLANT, payload: plant });
export const deletePlant = (plantId) => ({ type: ACTIONS.DELETE_PLANT, payload: plantId });

export const handleError = (error) => ({ type: ACTIONS.HANDLE_ERROR, payload: error });
