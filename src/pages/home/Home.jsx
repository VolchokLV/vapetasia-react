import React from 'react';
import {Warning, Hero, Navbar, HeroText} from '../../components';
import '../../index.css';


const Home = () => {
  return (
    <>
<style>
   @import url("https://use.typekit.net/fde1wvh.css");
</style>
    <div className='wrapper'>

      <div className='warning-container'>
        <div className='warning'>
            <Warning />
        </div>
      </div>
        <div className='navbar-container'>
          <div className='nav'>
            <Navbar />
          </div>
        </div>
        <div className='hero-container'>
          <div className='hero'>
            <Hero />
          </div>
          <div className='hero-text'>
            <HeroText />
          </div>
        </div>
        <div className='swwaa-container'>
          <div className='swwaa'>
            <Hero />
          </div>
        </div>
    </div>
    </>

  );
}

export default Home