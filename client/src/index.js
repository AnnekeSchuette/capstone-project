import React from 'react'
import ReactDOM from 'react-dom'
import GlobalFonts from '../src/fonts/Fonts'
import App from './components/App/App'
import GlobalStyle from './components/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
