import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider attribute="class">
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </BrowserRouter>
)
