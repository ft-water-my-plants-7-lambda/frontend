import { resetErrors, init } from '.'

export const handleInit = (user) => async (dispatch) => {
  if (!localStorage.getItem('token')) return

  resetErrors()

  const username = localStorage.getItem('username')
  const phoneNumber = localStorage.getItem('phoneNumber')

  dispatch(init({ username, phoneNumber }))
}
