import React from 'react'
import HeroSection from './Hero'
import TestimonialCarousel from './Testimonial'
import Slogan from './Slogan'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Slogan/>
      <TestimonialCarousel />
    </div>
  )
}

export default Home