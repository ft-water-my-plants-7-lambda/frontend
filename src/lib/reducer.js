import { ACTIONS } from './actions'

const initialState = {
  user: {
    isAuthenticated: false,
    username: '',
  },
  isLoading: false,
  validationError: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
