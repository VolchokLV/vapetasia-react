import React from 'react';
import {AuthorizedRetailers, BuyOnline, Hero, IndustryUpdate, LetsGetSocial, Newsletter, PopularFlavors, PromotingVapetasia, SeeWhatWeAreAbout} from '../../components';
import './home.css';


const Home = (props) => {
  return (
    <>
      <Hero heroClass="HomeHero" top={'Vapetasia Handcrafted'} bottom={'Award Winning E-Liquid'} paragraph={'We invest our energy and commitment to produce delicious, flavorful alternatives to combustible cigarettes.'}></Hero>
      <SeeWhatWeAreAbout></SeeWhatWeAreAbout>
      <IndustryUpdate></IndustryUpdate>
      <PopularFlavors featured={props.featured}></PopularFlavors>
      <AuthorizedRetailers></AuthorizedRetailers>
      <BuyOnline></BuyOnline>
      <LetsGetSocial></LetsGetSocial>
      <Newsletter></Newsletter>
      <PromotingVapetasia></PromotingVapetasia>
    </>
  );
}

export default Home