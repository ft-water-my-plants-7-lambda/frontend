import axios from 'axios'

export const login = async (user) => {
  try {
    const res = await axios.post('https://water-my-plants-7-ft.herokuapp.com/api/users/login', user)

    return res
  } catch (err) {
    return err
  }
}
