import React from 'react'
import '../trip/Trip.css'
import Tripdata from './Tripdata'

const Trip = () => {
  return (
    <div className='Trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className='tripcard'>
        <Tripdata
            image="../assets/5.jpg"
            heading="Trip in Indonesia"
            text="With over 17,000 islands, Indonesia is the world’s largest island country.  With so much on offer, it can take months to see everything because there is just so much to see and do here: hectic and chaotic cityscapes, cool white sand beaches, and violent volcanoes. Indonesia has it all."
        />
        <Tripdata
            image="../assets/6.jpg"
            heading="Trip in Malayasia"
            text="With over 17,000 islands, Indonesia is the world’s largest island country.  With so much on offer, it can take months to see everything because there is just so much to see and do here: hectic and chaotic cityscapes, cool white sand beaches, and violent volcanoes. Indonesia has it all."
        />
        <Tripdata
            image="../assets/8.jpg"
            heading="Trip in Finance"
            text="With over 17,000 islands, Indonesia is the world’s largest island country.  With so much on offer, it can take months to see everything because there is just so much to see and do here: hectic and chaotic cityscapes, cool white sand beaches, and violent volcanoes. Indonesia has it all."
        />
        </div>
       
    </div>
  )
}

export default Trip