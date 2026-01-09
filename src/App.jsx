import React, { useEffect } from 'react'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom'
import Pets from './pages/Pets'
import Blog from './pages/Blog'
import Policies from './pages/Policies'

const App = () => {

  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true,     // whether animation should happen only once - while scrolling down
      easing: 'ease-in-out', 
    });
  }, []);

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