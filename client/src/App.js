import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Routes } from './components/routes'
import React from 'react'
function App() {
  const routes = Routes(true)
  return (
    <BrowserRouter>
      <Navbar />
      <div>{routes}</div>
    </BrowserRouter>
  )
}

export default App
