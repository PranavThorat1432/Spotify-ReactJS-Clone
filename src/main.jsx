import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './Context/PlayerContext.jsx'
import ToastProvider from './Context/ToastContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

      <BrowserRouter>
        <PlayerContextProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </PlayerContextProvider>
      </BrowserRouter>

  </StrictMode>,
)
