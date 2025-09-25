import React from 'react'
import PageHeader from '../components/PageHeader'
import { FaWrench } from 'react-icons/fa'
import { FaTemperatureThreeQuarters } from 'react-icons/fa6'
import { PiGridNineLight } from "react-icons/pi";


const About = () => {

  // Services Section
  const ServiceSection = () => {
    return (
      <div className="services-section">
        <div className="section-header">
          <h2>Our services</h2>
          <hr />
        </div>
        <div className="services-cont">
          <div className="service-item">
            <FaWrench />
            <h4>Plumbing & Maintenance</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>

          <div className="service-item">
            <FaTemperatureThreeQuarters />
            <h4>Central heating</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>

          <div className="service-item">
            <PiGridNineLight />
            <h4>Drainlaying</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>
        </div>
      </div>
    )
  }

  // Our History Section
  const HistorySection = () => {
    return (
      <div className="history-section">
        <div className="section-header">
          <h2>Our history</h2>
          <hr />
        </div>
        <div className="history-content">
          <p>(this is where there will be a coupke of images and blurb about the company and its history...)</p>
        </div>
      </div>
    )
  }


  // MASTER RETURN
  return (
    <div className='about-page'>
      <PageHeader 
        title="About us" 
        backgroundImage="/about-bg.webp" 
      />  
      <ServiceSection/>  
      <HistorySection/>
    </div>
  )
}

export default About
