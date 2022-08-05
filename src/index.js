import React, {useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import Components 
import AuthorizedRetailers from './components/authorizedRetailers/AuthorizedRetailers';
import BuyOnline from './components/buyOnline/BuyOnline';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import IndustryUpdates from  './components/industryUpdates/IndustryUpdates';
import LetsGetSocial from './components/letsGetSocial/LetsGetSocial' ;
import Navbar from './components/navbar/Navbar';
import PopularFlavors from './components/popularFlavors/PopularFlavors';
import PromotingVapetasia from './components/promotingVapetasia/PromotingVapetasia';
import SeeWhatWeAreAbout from './components/seeWhatWeAreAbout/SeeWhatWeAreAbout';
import Warning from './components/warning/Warning';
//Import Pages
import AboutUs from './pages/aboutUs/AboutUs';
import Advocacy from './pages/advocacy/Advocacy';
import Blog from './pages/blog/Blog';
import ContactUs from './pages/contactUs/ContactUs';
import Disposables from './pages/disposables/Disposables';
import { Eliquid100ml } from './pages/eliquid100ml/Eliquid100ml';
import { Eliquid60ml } from './pages/eliquid60ml/Eliquid60ml';
import { Eliquid30ml } from './pages/eLiquid30ml/Eliquid30ml';
import Home from './pages/home/Home';
import Pact from './pages/pact/Pact';
import StoreLocator  from './pages/storeLocator/StoreLocator';
import Wholesale from './pages/wholesale/Wholesale';



 


// import {
//   ,
//   ,
//   ,
//   ,
//   Eliquid30ml,
//   Eliquid60ml,
//   Footer,
//   Hero,
//   HeroText,
//   Home,
//   IndustryUpdates,
//   LetsGetSocial,
//   Navbar,
//   NicWarning,
//   Pact,
//   PopularFlavors,
//   PromotingVapetasia,
//   SeeWhatWeAreAbout,
//   StoreLocator,
//   Wholesale, 
// } from "./components";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

