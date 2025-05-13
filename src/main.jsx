import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { store } from './redux/store.js'
import { ThemeProvider } from 'react-bootstrap'
import { Provider } from 'react-redux'
import '../src/components/i18n/i18n.js';  // Здесь ты подключаешь файл инициализации i18n

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
