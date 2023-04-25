import React from 'react';
import './Styles/Home.css'
import { boxSizing } from '@mui/system';

class Home extends React.Component{

  render(){
    return (
      <div style={{overflow:'scroll', boxSizing:'border-box', position:'relative'}}>
        <section class="showcase">
          <div class="video-container">
            <video src="CarsMid3.mp4" controls muted autoPlay={"autoplay"} preLoad="auto" loop></video>
          </div>
          <div class="content">
            <h1>Pico Rentals</h1>
            <h3>The Meden Rudnik Choice</h3>
            <a href="#about" class="btn">Read More</a>
          </div>
      </section>

      <section id="about">
        <h1>About</h1>
        <p>
        Pico Rentals is a luxury car rental company that offers an exclusive and unparalleled driving experience. Our fleet consists of the world's most sought-after and high-performance vehicles, including exotic sports cars, luxury SUVs, and premium sedans. We pride ourselves on providing exceptional service, attention to detail, and a seamless rental process that is tailored to meet the unique needs of our clients. Whether you're looking to impress a client, celebrate a special occasion, or simply indulge in the thrill of driving a high-end car, Pico Rentals has you covered. We are committed to delivering the ultimate luxury car rental experience that exceeds your expectations.
        </p>

        <h2>Follow Us On Social Media</h2>

        <div class="social">
          <a href="#" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
          <a href="#" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
          <a href="#" target="_blank"><i class="fab fa-github fa-3x"></i></a>
          <a href="#" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
        </div>
      </section>
    </div>
    );
  }
}

export default Home;