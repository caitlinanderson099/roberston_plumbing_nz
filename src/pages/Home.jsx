import React from 'react'
import LandingHeader from '../components/LandingHeader'
import { FaWrench } from 'react-icons/fa'
import { FaStar, FaTemperatureThreeQuarters } from 'react-icons/fa6'
import { PiGridNineLight } from "react-icons/pi";

// SwiperJS imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  // Testimonials Section
  const TestimonialSection = () => {
    return (
      <div className="testimonial-section">
        <div className="section-header">
          <h2>Testimonials</h2>
          <hr />
        </div>
        <div className="review-cont">
          <div className="review-item">
            <h3>John Doe, Newtown Wellington</h3>
            <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit..."</p>
            <div className="star-rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>

          <div className="review-item">
            <h3>Jane Smith, Porirua</h3>
            <p>"Donec quam felis, ultricies nec, pellentesque eu, pretium quis..."</p>
            <div className="star-rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>

          <div className="review-item">
            <h3>Sam Lee, Lower Hutt</h3>
            <p>"Cum sociis natoque penatibus et magnis dis parturient montes..."</p>
            <div className="star-rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Gallery Section (Swiper)
  const GallerySection = () => {
    const images = [
      "/bathroom-reno.jpeg",
      "/plumbing-img.jpeg",
      "/drainlaying-img.jpeg",
      "/bathroom-reno2.jpeg",
    ]

    return (
      <div className="gallery-section">
        <div className="section-header">
          <h2>Gallery</h2>
          <hr />
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },   // 2 on tablets
            1024: { slidesPerView: 3 },  // 3 on desktops
          }}
          className="gallery-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="gallery-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }

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
      <ImageScroll2 />
      <GallerySection /> */}
    </div>
  )
}

export default Home
