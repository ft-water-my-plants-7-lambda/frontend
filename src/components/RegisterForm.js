import { useState } from 'react'
import { useHistory } from 'react-router'

import { connect } from 'react-redux'
import { handleRegister } from '../lib/actions/handleRegister'

const initialCredentials = { username: '', /* phoneNumber: "",*/ password: '' }

const RegisterForm = ({ handleRegister }) => {
  const { push } = useHistory()

  const [credentials, setCredentials] = useState(initialCredentials)

  const change = (e) => {
    const name = e.target.name
    const value = e.target.value

    setCredentials({ ...credentials, [name]: value })
  }

  const submit = (e) => {
    e.preventDefault()

    handleRegister(credentials)
    push('/login')
  }

  return (
    <form onSubmit={submit}>
      <h2>Registration</h2>
      <label>
        Username:
        <input onChange={change} name="username" type="text" />
      </label>
      {/* <label>
        Phone Number:
        <input></input>
      </label> */}
      <label>
        Password:
        <input onChange={change} name="password" type="text" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default connect(null, { handleRegister })(RegisterForm)
