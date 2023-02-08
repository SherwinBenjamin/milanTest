/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import './navbarStyles.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <nav className={`navbar ${isNavbarHidden ? 'hidden' : ''}`}>
    <div className={`header navbar ${isNavbarHidden ? 'hidden' : ''}`}>
      <Link to='/'>
       <img className='logo' alt="logo" src={logo}/>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/event'>Events</Link>
        </li>
        <li>
          <Link to='/comingsoon'>Spotlight</Link>
        </li>
        <li>
          <Link to='/comingsoon'>Sponsors</Link>
        </li>
        <li>
          <Link to='/comingsoon'>The Team</Link>
        </li>
        <li>
          <Link to='/comingsoon'>FAQ</Link>
        </li>
        <li>
          <Link to='/comingsoon'>Timeline</Link>
        </li>
        <li className='ticket'>
          <Link to='/comingsoon'>Tickets</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
    // </nav>
  );
};

export default Navbar;
