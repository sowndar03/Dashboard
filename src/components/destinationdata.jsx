
import React from 'react'
import './destination/destination.css'
const Destinationdata = (props) => {
  return (
    <div>
        <div className={props.clsName}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}
          </p>
        </div>
        <div className="image">
            <img alt="img" src={props.img1} />
            <img alt="img" src={props.img2} />
        </div>
      </div>
    </div>
  )
}

export default Destinationdata