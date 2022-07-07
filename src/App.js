import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import SingleUser from './pages/SingleUser'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/users/:id' element={<SingleUser/>} />
      </Routes>
    </Router>
  )
}

export default App
