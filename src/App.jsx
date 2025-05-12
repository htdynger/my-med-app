import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Start from './components/Start/Start'
// import Login from './components/SignUp/Login'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Account from './components/Account/Account'


function App() {


  return (
    <>
      

      <BrowserRouter>
        <Navbar />
        <Routes> 

          <Route path='/' element={<Start />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/account' element={<Account />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
