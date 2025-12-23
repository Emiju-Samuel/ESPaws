import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Pets from './pages/Pets'
import Blog from './pages/Blog'
import Policies from './pages/Policies'

const App = () => {
  return (
    <div>
      {/* < Menubar /> */}
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/pets' element={< Pets />} />
        <Route path='/blog' element={< Blog />} />
        <Route path='/policies' element={ < Policies /> } />
      </Routes>
    </div>
  )
}

export default App