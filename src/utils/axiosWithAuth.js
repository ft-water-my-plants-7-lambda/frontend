import axios from 'axios'

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    headers: {
      authorization: token,
    },
    // TODO: update baseURL
    // baseURL: 'https://water-my-plants-7-ft.herokuapp.com/api',
  })
}

export default axiosWithAuth
