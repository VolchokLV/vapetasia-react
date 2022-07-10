import React, {useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import {
  AboutUs,
  Advocacy,
  AuthorizedRetailers,
  BuyOnline,
  ContactUs,
  Disposables,
  Eliquid100ml,
  Eliquid30ml,
  Eliquid60ml,
  Footer,
  Hero,
  HeroText,
  Home,
  IndusctryUpdates,
  LetsGetSocial,
  Navbar,
  NicWarning,
  Pact,
  PopularFlavors,
  PromotingVapetasia,
  SeeWhatWeAreAbout,
  StoreLocator,
  Wholesale, 
} from "./components";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

