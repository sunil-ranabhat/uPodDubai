import React from 'react'
import HeroSection from './Hero'
import TestimonialCarousel from './Testimonial'
import Slogan from './Slogan'
import PodcastServices from './Services'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Slogan/>
      <PodcastServices />
      <TestimonialCarousel />
    </div>
  )
}

export default Home