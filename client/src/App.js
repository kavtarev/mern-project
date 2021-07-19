import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Routes } from './components/routes'
import React from 'react'
import { AuthContext } from './context'
import { AuthHook } from './hook'
function App() {
  const { login, logout, token, ready } = AuthHook()
  const isLogged = !!token
  console.log('app.js ', token, isLogged)
  if (!ready) {
    return <div>loader</div>
  }
  return (
    <AuthContext.Provider value={{ login, logout, token, isLogged }}>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
