import React from 'react';
import './heroStyles.css';
import Logo from '../../assets/logo.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <div className='typeface'>
          <img src={Logo} alt='milan logo' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
