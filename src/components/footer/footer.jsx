import React from 'react'
import '../footer/footer.css'
import Socialfollow from '../socialfollow'
import Footerdata from './footerdata'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Trippy</h1>
                <p>Choose Your Favorite destination.</p>
            </div>
            <div className='socialicon'>
              <Socialfollow />
            </div>
        </div>
        <div className='bottom'>
          <Footerdata 
          name="Project"
          text1="Status"
          text2="License"
          text3="All Versions"
          text4="Changelog" />
          <Footerdata 
          name="Community"
          text1="Github"
          text2="Issues"
          text3="Project" 
          text4="Twitter"/>
          <Footerdata 
         name="Help"
         text1="Support"
         text2="Troubleshooting"
         text3="Contact Us"
         text4=" "  />
          <Footerdata 
          name="Others"
          text1="Terms of Service"
          text2="Privacy Policy"
          text3="License"
          text4=" " />
        </div>
    </div>
  )
}

export default Footer