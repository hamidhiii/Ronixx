import { useTheme } from '../../hooks/theme-context'
import './ThemeToggle.scss'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()


  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme" >
      {theme === "dark" ? (
        <svg className="icon sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M5.05 18.36l-.71.71M21 12h-1M4 12H3m2.34-5.66l.71.71M18.95 18.36l.71.71M12 8a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
      ) : (
        <svg className="icon moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
        </svg>
      )}
    </button>
  )
}
