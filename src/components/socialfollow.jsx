import React from 'react'
import { Link } from 'react-router-dom' 
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Socialfollow = () => {
  return (
    <div className='socialicon'>
        <Link to="https://www.facebook.com/" >
            <FontAwesomeIcon icon={faFacebook} className='link'/>
        </Link>
        <Link to="https://www.instagram.com/" >
            <FontAwesomeIcon icon={faInstagram} className='link'/>
        </Link>
        <Link to="https://www.youtube.com/" >
            <FontAwesomeIcon icon={faYoutube} className='link'/>
        </Link>
        <Link to="https://twitter.com/" >
            <FontAwesomeIcon icon={faTwitter} className='link'/>
        </Link>
    </div>
  )
}

export default Socialfollow