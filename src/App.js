import React, { useEffect, useState } from 'react';

import './App.css';
import "./index.css"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Advocacy, Blog, ContactUs, Disposables, Eliquid100ml, Eliquid60ml, Eliquid30ml, Home, Pact, StoreLocator, Wholesale } from './pages';
import { ContactSupport, MediaReqquestForm, PromotionalRequest, WholesaleRegistration, Navigation, Warning, Footer } from './components';
import { Nav } from 'react-bootstrap';

import * as products from './data.json';

function App() {

  /*
  PREPARE PRODUCTS FOR PAGES
  */
 let featured = []
 let disposables = []
 let e30 = []
 let e60 = []
 let e100 = []
  for (let i = 0; i < products.default.length; i++) {
    switch (products.default[i].product_type) {
      case 'disposable':
        disposables.push(products.default[i])
        break
      case 'e-liquid-30ml':
        e30.push(products.default[i])
        break
      case 'e-liquid-60ml':
        e60.push(products.default[i])
        break
      case 'e-liquid-100ml':
        e100.push(products.default[i])
        break
    }
    if (products.default[i].is_featured == 1) {
      featured.push(products.default[i])
    }
  }
  return (
    <>
      <Warning />
      <div id="outer-wrap" className="site clr">
        <a className="skip-link screen-reader-text" href="#main">Skip to content</a>
        <div id="wrap" className="clr">
        <Navigation />
        <main id="main" class="site-main clr" role="main">
          <div id="content-wrap" class="clr">
            <div id="primary" class="content-area clr">
              <div id="content" class="site-content clr">
                  <Routes>
                    <Route path="/" element={<Home products={featured} />} />
                    <Route path="/about-us" element={<AboutUs />} /> 
                    <Route path="/advocacy" element={<Advocacy />} /> 
                    <Route path="/blog" element={<Blog />} /> 
                    <Route path="/contact" element={<ContactUs />} /> 
                    <Route path="/media-reqest-form" element={<MediaReqquestForm />} /> 
                    <Route path="/promotional-reqest" element={<PromotionalRequest />} /> 
                    <Route path="/wholesale-registration" element={<WholesaleRegistration />} /> 
                    <Route path="/contact-support" element={<ContactSupport />} /> 
                    <Route path="/contact" element={<ContactUs />} /> 
                    <Route path="/disposables" element={<Disposables products={disposables} />} /> 
                    <Route path="/flavors/e-liquid-100ml" element={<Eliquid100ml products={e100} />} /> 
                    <Route path="/flavors/e-liquid-60ml" element={<Eliquid60ml products={e60} />} /> 
                    <Route path="/flavors/e-liquid-30ml" element={<Eliquid30ml products={e30} />} /> 
                    <Route path="/store-locator" element={<StoreLocator />} /> 
                    <Route path="/pact" element={<Pact />} /> 
                    <Route path="/wholesale" element={<Wholesale />} /> 
                  </Routes>
              </div>
            </div>
          </div>
          </main>
          <Footer />
        </div>
      </div>
    </>   
  );
}

export default App;
