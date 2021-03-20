import React from 'react'
import ReactDOM from 'react-dom'
import GlobalFonts from 'fonts/Fonts'
import App from 'components/App/App'
import GlobalStyle from 'components/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalFonts />
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
