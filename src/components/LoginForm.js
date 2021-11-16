import { useState } from 'react'
import { useHistory } from 'react-router'

import { connect } from 'react-redux'
import { handleLogin } from '../lib/actions/handleLogin'

const initialCredentials = { username: '', password: '' }

const LoginForm = ({ handleLogin }) => {
  const { push } = useHistory()

  const [credentials, setCredentials] = useState(initialCredentials)

  const change = (e) => {
    const name = e.target.name
    const value = e.target.value

    setCredentials({ ...credentials, [name]: value })
  }

  const submit = async (e) => {
    e.preventDefault()

    await handleLogin(credentials)
    push('/plants')
  }

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>

      <label>
        Username:
        <input onChange={change} value={credentials.username} name="username" type="text" />
      </label>

      <label>
        Password:
        <input onChange={change} value={credentials.password} name="password" type="password" />
      </label>

      <button>Login</button>
      <button type="button">Forgot Password?</button>
    </form>
  )
}

export default connect(null, { handleLogin })(LoginForm)
