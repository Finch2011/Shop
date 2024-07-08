import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Layout/Login.jsx'
import Up from './Layout/SiginUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Up' element={<Up/>}/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
