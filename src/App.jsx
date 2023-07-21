import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Pages/api'
import Header from './components/common/Header'
import Login from './components/Auth/Login'
import { Route, Routes } from 'react-router-dom'
import Feeds from './Pages/Feeds'

function App() {

  return (
    <>
    < Header />
      <Routes>
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
