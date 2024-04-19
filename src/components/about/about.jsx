import React from 'react'
import Navbar from '../navbar/navbar'
import '../Hero.css'
import Footer from '../footer/footer'
import Aboutus from './aboutus'

const About = () => {

  const herostyle = {
    backgroundImage: `url("/assets/night.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <div>
      <Navbar />
      <div className='hero-mid' style={herostyle}>
        <div className='Hero-text'>
            <h1>About</h1>
        </div>
        <Aboutus />
        <Footer />
    </div>
          
    </div>
  )
}

export default About