import React from 'react';
import {AuthorizedRetailers, BuyOnline, Hero, HeroText, IndustryUpdate, LetsGetSocial, PopularFlavors, PromotingVapetasia, SeeWhatWeAreAbout} from '../../components';
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
      <IndustryUpdate />
      <PopularFlavors />
      <AuthorizedRetailers />
      <BuyOnline />
      <LetsGetSocial />
      <PromotingVapetasia />
    </>

  );
}

export default Home