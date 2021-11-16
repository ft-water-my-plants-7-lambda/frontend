import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { handleLogout } from '../lib/actions/handleLogout'

import Page from '../components/Page'

const LogoutPage = ({ handleLogout }) => {
  const { push } = useHistory()

  useEffect(() => {
    handleLogout()
    push('/login')
  }, [handleLogout, push])

  return <Page />
}

export default connect(null, { handleLogout })(LogoutPage)
