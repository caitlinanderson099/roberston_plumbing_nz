import React from 'react'
import LandingHeader from '../components/LandingHeader'
import SEO from "../components/SEO";


const Home = () => {
  

  // MASTER RETURN
  return (
    <>
    <SEO 
          title="Robertson Plumbing Solutions LTD | Home"
          description="Top plumbing services in Upper Hutt, Wellington."
          url="https://robertsonplumbing.vercel.app/"
        />
    <div className='home-page'>
      <LandingHeader
        title="Robertson Plumbing Solutions Ltd "
        backgroundImage="/bg-images/landing-bg.jpg"
      />
    </div>
    </>
  )
}

export default Home
