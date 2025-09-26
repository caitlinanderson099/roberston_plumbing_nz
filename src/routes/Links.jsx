import React from 'react'
import { Route, Routes } from 'react-router-dom'

// MAIN PAGES
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

// EXTRA PAGES
import TestimonialGallery from '../pages/TestimonialGallery'
import Plumbing from '../pages/Plumbing'
import Drainlaying from '../pages/Drainlaying'
import CentralHeating from '../pages/CentralHeating'

const Links = () => {
  return (
    <>
    <Routes>
      {/* Main Pages */}
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/contactus' element={<Contact/>}/>
      {/* Extra Pages */}
        <Route path='/testimonialsandgallery' element={<TestimonialGallery/>}/>
        <Route path='/plumbing' element={<Plumbing/>}/>
        <Route path='/drainlaying' element={<Drainlaying/>}/>
        <Route path='/centralheating' element={<CentralHeating/>}/>
    </Routes>
      
    </>
  )
}

export default Links
