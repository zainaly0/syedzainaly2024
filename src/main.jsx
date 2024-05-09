import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Urdu from './Component/Urdu/Urdu.jsx'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/english' element={<Home />} />
        <Route path='/urdu' element={<Urdu />} />
      </Routes>

    </BrowserRouter>


  </React.StrictMode>,
)
