import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>  //comentado para que funcione agregar empanadas de a 1 en DocenaEmpanadasModal
    <App />
  //</StrictMode>,
)
