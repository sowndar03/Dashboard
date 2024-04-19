import React from 'react'
import { Link } from 'react-router-dom'

const Footerdata = (props) => {
  return (
    <div>
        <h4>{props.name}</h4>
        <Link to='/'>{props.text1}</Link>
        <Link to='/'>{props.text2}</Link>
        <Link to='/'>{props.text3}</Link>
        <Link to='/'>{props.text4}</Link>
    </div>
  )
}

export default Footerdata