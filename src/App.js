import React from 'react';

import './App.css';
import "./index.css"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Advocacy, Blog, ContactUs, Product, ProductGrid, Home, StoreLocator, Wholesale } from './pages';
import { ContactSupport, MediaRequestForm, PromotionalRequest, WholesaleRegistration, Navigation, Warning, Footer } from './components';
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
    let srcs = products.default[i].img_src;
    if (srcs) {
      let keys = Object.keys(srcs);
      products.default[i]['default_image'] = products.default[i].img_src[keys[0]];
    }
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
        <main id="main" className="site-main clr" role="main">
          <div id="content-wrap" className="clr">
            <div id="primary" className="content-area clr">
              <div id="content" className="site-content clr">
                <article className="single-page-article clr">
                  <div className="entry clr" itemProp="text">
                    <div data-vapetasia-type="wp-page" data-vapetasia-id="191" className="vapetasia vapetasia-191">
                      <div className="vapetasia-inner">
                        <div className="vapetasia-section-wrap">
                            <Routes>
                              <Route path="/" element={<Home featured={featured} />} />
                              <Route path="/about-us" element={<AboutUs />} /> 
                              <Route path="/advocacy" element={<Advocacy />} /> 
                              <Route path="/blog" element={<Blog />} /> 
                              <Route path="/contact" element={<ContactUs />} /> 
                              <Route path="/media-reqest-form" element={<MediaRequestForm />} /> 
                              <Route path="/promotional-reqest" element={<PromotionalRequest />} /> 
                              <Route path="/wholesale-registration" element={<WholesaleRegistration />} /> 
                              <Route path="/contact-support" element={<ContactSupport />} /> 
                              <Route path="/contact" element={<ContactUs />} /> 
                              <Route path="/category/:type/:topic/:value" element={<ProductGrid products={products.default} />} /> 
                              <Route path="/product/:slug/:size" element={<Product products={products.default} featured={featured} />} />                              
                              <Route path="/store-locator" element={<StoreLocator />} /> 
                              {/* <Route path="/pact" element={<Pact />} />  */}
                              <Route path="/wholesale" element={<Wholesale />} /> 
                            </Routes>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
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
