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
            <FaWrench/>
            <h4>GENERAL PLUMBING & MAINTENANCE</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Don</p>
          </div>

          <div className="service-item">
            <FaTemperatureThreeQuarters/>
            <h4>HEATING</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Don</p>
          </div>

          <div className="service-item">
            <PiGridNineLight />
            <h4>DRAINLAYING</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Don</p>
          </div>
        </div>
      </div>
    )
  }

  // Image Scroll Section #1
  const ImageScroll1 = () => {
    return (
      <div className="image-scroll"></div>
    )
  }

  // Image Scroll Section #2
  const ImageScroll2 = () => {
    return (
      <div className="image-scroll2"></div>
    )
  }

  // Testimonials Section
  const TestimonialSection = () => {
    return(
      <div className="testimonial-section">
        <div className="section-header">
          <h2>Testimonials</h2>
          <hr />
        </div>
      </div>
    )
  }


  // MASTER RETURN
  return (
    <div className='home-page'>
      <LandingHeader 
        title="Robertson Heating & Plumbing " 
        backgroundImage="/about-bg.webp" 
      />  
      <ServiceSection/>
      <ImageScroll1/>
      <TestimonialSection/>
      <ImageScroll2/>
      {/* Gallery section */}
    </div>
  )
}

export default Home
