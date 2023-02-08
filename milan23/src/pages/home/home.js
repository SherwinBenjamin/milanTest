import React from 'react';
import './Home.css';
import { Navbar, Hero } from '../../components';
import Footer from "../../containers/footer/Footer"

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <section className='about-us'>
        <div className='about-us-left'>
          <h2>About Us</h2>
        </div>
        <div className='about-us-right'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper, nisi a congue
            malesuada, urna nulla auctor enim, eget aliquet est purus a libero. Fusce at libero id
            neque laoreet tincidunt. Sed euismod leo non elit interdum luctus. Sed id turpis at dui
            placerat malesuada eu at metus. Sed ac velit vel ligula rutrum congue vel vel velit.
            Proin vel velit congue, fringilla elit vel, facilisis odio.{' '}
          </p>
        </div>
      </section> */}
      <Footer/>
    </div>
  );
}

export default Home;
