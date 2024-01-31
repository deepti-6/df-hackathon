import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// IMPORT COMPONENTS ACCORDINGLY
import { ReactDOM } from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Route,Routes, Link, BrowserRouter as Router} from 'react-router-dom'

import LogIn from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<LogIn/>}/>
        <Route exact path='/login' element={<LogIn/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>

    
    
    </>
  )
}

export default App
