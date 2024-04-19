import React from 'react'
import Hero from '../Hero'
import Navbar from '../navbar/navbar'
import '../Hero.css'
import Destination from '../destination/destination'
import Trip from '../trip/Trip'
import Footer from '../footer/footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
          cName='hero'
          title="Your Journery Your Story"
          text="Choose Your Favorite Destination" 
          linkTo="/"
          buttonText="Travel Plan"
          backgroundImg = "/assets/12.jpg"/>
          <Destination />
          <Trip />
          <Footer />
    </div>
  )
}

export default Home