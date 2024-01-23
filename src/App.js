import React from 'react';

import './App.css';
import "./index.css"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Advocacy, Blog, BlogPost, ContactUs, ContactSupport, Compliance, Home, MediaRequest, PrivacyPolicy, Product, ProductGrid, PromotionalRequest, PMTA, StoreLocator, TradeshowRegistration, Wholesale, WholesaleRegistration, Retailers, TeamVapetasia } from './pages';
import { Navigation, Warning, Footer, AgeVerifyModal } from './components';


import * as products from './data/products.json';
import Terms from './pages/termsAndConditions/TermsAndConditions';

function App() {

  /*
  PREPARE PRODUCTS FOR PAGES
  */
  let featuredProducts = []
  for (let i = 0; i < products.default.length; i++) {
    let srcs = products.default[i].img_src;
    if (srcs) {
      let srcKeys = Object.keys(srcs);
      products.default[i]['default_image'] = products.default[i].img_src[srcKeys[0]];
    } else {
      console.log("no default")
    }
    let featured = products.default[i]['featured'];
    if (featured && featured.display === 1) {
      featuredProducts.push(products.default[i])
    }
  }
  let featuredProducts2 = []
  for (let i = 0; i < products.default.length; i++) {
    // console.log(featuredProducts2)
    let srcs = products.default[i].img_src;
    if (srcs) {
      let srcKeys = Object.keys(srcs);
      products.default[i]['default_image'] = products.default[i].img_src[srcKeys[0]];
    } else {
      console.log("no default")
    }
    let featured2 = products.default[i]['featured2'];
    if (featured2 && featured2.display === 1) {
      featuredProducts2.push(products.default[i])
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
                              <Route path="/" element={<Home
                                featured={featuredProducts}
                                featured2={featuredProducts2} />} />
                              <Route path="/about-us" element={<AboutUs />} />
                              <Route path="/advocacy" element={<Advocacy />} />
                              <Route path="/blog" element={<Blog />} />
                              <Route path="/:slug" element={<BlogPost />} />
                              <Route path="/contact" element={<ContactUs />} />
                              <Route path="/contact-support" element={<ContactSupport />} />
                              <Route path="/compliance" element={<Compliance />} />
                              <Route path="/category/:type/:topic/:value" element={<ProductGrid
                                products={products.default} />} />
                              <Route path="/media-request" element={<MediaRequest />} />
                              <Route path="/team-vapetasia" element={<TeamVapetasia />} />
                              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                              <Route path="/vapetasia-pmta" element={<PMTA />} />
                              <Route path="/promotional-request" element={<PromotionalRequest />} />
                              <Route path="/product/:slug/:sizeOrBrand" element={<Product
                                products={products.default}
                                featured={featuredProducts}
                                featured2={featuredProducts2} />} />
                              <Route path="/retailers" element={<Retailers />} />
                              <Route path="/store-locator" element={<StoreLocator />} />
                              <Route path="/terms-and-conditions" element={<Terms />} />
                              {/* <Route path="/pact" element={<Pact />} />  */}
                              <Route path="/wholesale" element={<Wholesale />} />
                              <Route path="/wholesale-registration" element={<WholesaleRegistration />} />
                              <Route path="/tradeshow-registration" element={<TradeshowRegistration />} />
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
      <AgeVerifyModal />
    </>
  );
}

export default App;
