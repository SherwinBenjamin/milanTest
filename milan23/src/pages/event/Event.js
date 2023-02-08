import React from 'react';
import './Event.css';
import Categories from '../../containers/categories/Categories';
import { Navbar } from '../../components';
import Footer from "../../containers/footer/Footer";

function Event() {
  return (
    <div className='eventPage'>
      <Navbar />
      <h1 className='head'>EVENTS</h1>

      <h3 className='event__tag'>TIGHTEN YOUR SEAT!</h3>
      <Categories />
      <Footer/>
    </div>
  );
}

export default Event;
