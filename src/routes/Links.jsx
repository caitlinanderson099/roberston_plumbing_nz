import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

const Links = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/ourservices' element={<Services/>}/>
        <Route path='/contactus' element={<Contact/>}/>
    </Routes>
      
    </>
  )
}

export default Links
