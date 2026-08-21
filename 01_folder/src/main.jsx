import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Fun,P} from './App.jsx'
import Jio from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fun /> // here we calling the function nigga from module App.jsx
    <Jio />
    <P />
  </StrictMode>,
)
