import React from 'react'
import Navbar from '../Header/Header'
import Hero from './Hero/Hero'
import LeaderShip from './LeaderShip/LeaderShip'
import Awards from './Awards/Awards'
import Carousel from './Carousel/Carousel'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LeaderShip/>
      <Awards/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default About
