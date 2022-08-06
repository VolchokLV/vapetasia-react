import React, { useEffect } from 'react';

import './App.css';
import "./index.css"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Advocacy, Blog, ContactUs, Disposables, Eliquid100ml, Eliquid60ml, Eliquid30ml, Home, Pact, StoreLocator, Wholesale } from './pages';
import { ContactSupport, MediaReqquestForm, PromotionalRequest, WholesaleRegistration, Navbar, Warning, Footer } from './components';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <>
    <div className='container-fluid'>
      <Warning />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/advocacy" element={<Advocacy />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/media-reqest-form" element={<MediaReqquestForm />} /> 
          <Route path="/promotional-reqest" element={<PromotionalRequest />} /> 
          <Route path="/wholesale-registration" element={<WholesaleRegistration />} /> 
          <Route path="/contact-support" element={<ContactSupport />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/disposables" element={<Disposables />} /> 
          <Route path="/flavors/e-liquid-100ml" element={<Eliquid100ml />} /> 
          <Route path="/flavors/e-liquid-60ml" element={<Eliquid60ml />} /> 
          <Route path="/flavors/e-liquid-30ml" element={<Eliquid30ml />} /> 
          <Route path="/store-loactor" element={<StoreLocator />} /> 
          <Route path="/pact" element={<Pact />} /> 
          <Route path="/wholesale" element={<Wholesale />} /> 
        </Routes>
        <Footer />
      </div>
      </>   
  );
}

export default App;
