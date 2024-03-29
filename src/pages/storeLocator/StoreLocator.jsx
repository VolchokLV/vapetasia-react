import React from 'react'
import {Hero, LetsGetSocial} from '../../components';
import './storeLocator.css';

const StoreLocator = () => {
  return (
    
    <>
    
      <Hero heroClass="StoreLocator" top={'Vapetasia'} bottom={'Store Locator'} paragraph={'We have compiled all of our retailers so you can view the shops in the US that carry our brand. Enter your address or zip code to find your store.'}></Hero>
      <iframe title="StoreLocator" className='iframe' src='https://viewer.blipstar.com/show?uid=2348555&search=geoip&gui=true&rc=&width=auto'  scrolling='yes' allow='geolocation'></iframe>

      <LetsGetSocial />

    </>
  )
}

export default StoreLocator


