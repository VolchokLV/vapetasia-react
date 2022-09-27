import React from 'react'
import {AuthorizedRetailers, BuyOnline, Hero, HeroText, IndustryUpdate, LetsGetSocial, PopularFlavors, PromotingVapetasia, SeeWhatWeAreAbout} from '../../components';
import './storeLocator.css';
import PropTypes from 'prop-types';

const StoreLocator = (props) => {
  return (
    
    <>
    
      <Hero top={'Vapetasia'} bottom={'Store Locator '} paragraph={'We have compiled all of our retailers so you can view the shops in the US that carry our brand. Enter your address or zip code to find your store.'}></Hero>
      <iframe className='iframe' src='https://viewer.blipstar.com/show?uid=2348555&search=geoip&gui=true&rc=&width=auto' width='100%' height='100%' min-height='600px' scrolling='yes' allow='geolocation'></iframe>

    </>
  )
}

export default StoreLocator


// frameborder='0' scrolling='no' allow='geolocation'