import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import GlobalFonts from './fonts/Fonts'
import App from 'components/App/App'
import GlobalStyle from 'components/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <GlobalFonts />
        <GlobalStyle />
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
