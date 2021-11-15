import { StrictMode } from 'react'
import { render } from 'react-dom'

import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './lib/store'

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
