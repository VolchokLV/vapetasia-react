import React from 'react';
import {Hero, HeroText, SeeWhatWeAreAbout} from '../../components';
import './home.css';


const Home = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero'>
          <Hero />
        </div>
      </div>
      <div className='hero-text'>
        <div>
          <HeroText />
        </div>
      </div>
      <div className='swwaa-container'>
        <div className='swwaa'>
          <SeeWhatWeAreAbout />
        </div>
      </div>         
    </>

  );
}

export default Home