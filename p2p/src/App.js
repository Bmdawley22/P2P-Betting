import './App.css';
import React, { useState } from "react"
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home.js'
import Login from './Components/Login'
import Signup from './Components/Signup'

import users from './users.json'

function App() {
  const [usersHook, addUser] = useState({
    ...users
  })

  const handleSignup = (e, newUser) => {
    e.preventDefault()

    const temp = usersHook.users
    temp.push(newUser)

    addUser(temp)

  }

  console.log(usersHook);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup signup={handleSignup}/>}/>

      </Routes>
    </div>
  );
}

export default App;
