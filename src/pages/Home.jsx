import React from 'react'
import LandingHeader from '../components/LandingHeader'

const Home = () => {
  
  // Image Scroll Section #1
  const ImageScroll1 = () => <div className="image-scroll"></div>
  // Image Scroll Section #2
  const ImageScroll2 = () => <div className="image-scroll2"></div>

  // MASTER RETURN
  return (
    <div className='home-page'>
      <LandingHeader
        title="Robertson Plumbing Solutions Ltd "
        backgroundImage="/landing-bg.jpeg"
      />
      {/* <ServiceSection />
      <ImageScroll1 />
      <TestimonialSection />
      <ImageScroll2 /> */}
    </div>
  )
}

export default Home
