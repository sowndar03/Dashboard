import React from 'react'
import Navbar from '../navbar/navbar'
import Trip from '../trip/Trip'
import Footer from '../footer/footer'


const Service = () => {
  const herostyle = {
    backgroundImage: `url("/assets/2.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <div>
      <Navbar />
      <div className='hero-mid' style = {herostyle}>
    </div>
    <Trip />
    <Footer/>
    </div>
  )
}

export default Service