import React from 'react'
import HeroSection from './Hero'
import TestimonialCarousel from './Testimonial'
import Slogan from './Slogan'
import PodcastServices from './Services'
import PodcastEquipment from './Podcast Equipment'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <PodcastEquipment/>
      
      <Slogan/>
      <PodcastServices />
      <TestimonialCarousel />
    </div>
  )
}

export default Home