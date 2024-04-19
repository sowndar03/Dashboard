import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = (props) => {
  const herostyle = {
    backgroundImage: `url(${props.backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  const navigate = useNavigate();

  return (
    <div className={props.cName} style={herostyle}>
      <div className='Hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button className='show' onClick={() => navigate(props.linkTo)}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Hero;
