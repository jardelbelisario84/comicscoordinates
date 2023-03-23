import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { RouterMain } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import 'react-toastify/dist/ReactToastify.css'

// import './utils/ensure-basename'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename='/'>
        <RouterMain />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
