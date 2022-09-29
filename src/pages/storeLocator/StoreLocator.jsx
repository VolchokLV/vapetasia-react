import React from 'react'
import {StoreLocatorHero, LetsGetSocial} from '../../components';
import './storeLocator.css';

const StoreLocator = () => {
  return (
    
    <>
    
      <StoreLocatorHero heroClass="StoreLocatorHero" top={'Vapetasia'} bottom={'Store Locator '} paragraph={'We have compiled all of our retailers so you can view the shops in the US that carry our brand. Enter your address or zip code to find your store.'}></StoreLocatorHero>
      <iframe className='iframe' src='https://viewer.blipstar.com/show?uid=2348555&search=geoip&gui=true&rc=&width=auto'  scrolling='yes' allow='geolocation'></iframe>

      <LetsGetSocial />

    </>
  )
}

export default StoreLocator


