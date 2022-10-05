import React from 'react'
import {Hero, IndustryUpdate } from '../../components/';
import './advocacy.css';

const Advocacy = () => {
  return (
    <>
      <Hero heroClass="Advocacy" top={''} bottom={'Advocacy '} paragraph={'In an ever changing political environment, at Vapetasia we find it essential to give our attention to both state and federal regualtions that effect our industry.'}></Hero>
      <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-9872422 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="9872422" data-element_type="section">
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-660bdd5" data-id="660bdd5" data-element_type="column">
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div className="vapetasia-element vapetasia-element-7a977f0 vapetasia-widget-divider--view-line vapetasia-widget vapetasia-widget-divider" data-id="7a977f0" data-element_type="widget" data-widget_type="divider.default">
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-divider"> <span className="vapetasia-divider-separator"> </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IndustryUpdate></IndustryUpdate>
    </>
    
  )
}

export default Advocacy