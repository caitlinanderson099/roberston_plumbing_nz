import React from 'react'
import LandingHeader from '../components/LandingHeader'
import { FaWrench } from 'react-icons/fa'
import { FaTemperatureThreeQuarters } from 'react-icons/fa6'
import { PiGridNineLight } from "react-icons/pi";

const Home = () => {
  // Services Section
  const ServiceSection = () => {
    return (
      <div className="services-section">
        <div className="section-header">
          <h2>Our Services</h2>
          <hr />
        </div>
        <div className="services-cont">
          <div className="service-item">
            <FaWrench />
            <h4>GENERAL PLUMBING & MAINTENANCE</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>

          <div className="service-item">
            <FaTemperatureThreeQuarters />
            <h4>HEATING</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>

          <div className="service-item">
            <PiGridNineLight />
            <h4>DRAINLAYING</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>
        </div>
      </div>
    )
  }

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
