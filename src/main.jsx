import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
    <ThemeProvider attribute="class">
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
