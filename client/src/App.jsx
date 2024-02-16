import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Potat from './components/details/Details'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { useSessionStorage } from './hook/useSessionStorage'

import { authContext } from './context/authContext'

import './App.css'
import useLocalStorageTheme from './hook/useThemeHook'
import Home from './components/home/Home'
import Details from './components/details/Details'

function App() {

  const { theme, toggleTheme } = useLocalStorageTheme('dark')
  const [auth, setAuth] = useSessionStorage('token', {})

  document.body.className = theme == 'dark' ? 'dark-mode' : 'light-mode'


  const contex = {
    auth, setAuth, theme, toggleTheme
  }
  return (

    <authContext.Provider value={contex}>
      <Header />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/details/:id' element={<Potat />}></Route>

      </Routes >
    </authContext.Provider>
  )
}

export default App
