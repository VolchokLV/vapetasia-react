import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {NewsletterForm} from '../../components';
import './newsletter.css'

const Newsletter = () => {
  return (
    <>
      <section className="vapetasia-section-newsletter vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-16ea1b8 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="16ea1b8" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-8fd9880" data-id="8fd9880" data-element_type="column">
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div className="vapetasia-element vapetasia-element-ea94100 vapetasia-widget vapetasia-widget-spacer" data-id="ea94100" data-element_type="widget" data-widget_type="spacer.default">
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-spacer">
                        <div className="vapetasia-spacer-inner">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vapetasia-element vapetasia-element-67f969d vapetasia-widget vapetasia-widget-heading" data-id="67f969d" data-element_type="widget" data-widget_type="heading.default">
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default">SIGN UP FOR THE VAPETASIA NEWSLETTER <br /> FOR ALL OUR LATEST NEWS</h2>
                    </div>
                  </div>
                  
                  <section className="vapetasia-section vapetasia-inner-section vapetasia-element vapetasia-element-025298b vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="025298b" data-element_type="section">
                    <div className="vapetasia-container vapetasia-column-gap-default">
                      <div className="vapetasia-row">
                        <div className="vapetasia-column vapetasia-col-33 vapetasia-inner-column vapetasia-element vapetasia-element-d3ebca8" data-id="d3ebca8" data-element_type="column">
                          <div className="vapetasia-column-wrap">
                            <div className="vapetasia-widget-wrap">
                            </div>
                          </div>
                        </div>
                        <div className="vapetasia-column vapetasia-col-33 vapetasia-inner-column vapetasia-element vapetasia-element-afe8bd8" data-id="afe8bd8" data-element_type="column">
                          <div className="vapetasia-column-wrap vapetasia-element-populated">
                            <div className="vapetasia-widget-wrap">
                              <div className="vapetasia-element vapetasia-element-7e2f1dd vapetasia-button-align-stretch vapetasia-widget vapetasia-widget-form" data-id="7e2f1dd" data-element_type="widget" data-widget_type="form.default">
                                <div className="vapetasia-widget-container">
                                  <NewsletterForm />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vapetasia-column vapetasia-col-33 vapetasia-inner-column vapetasia-element vapetasia-element-4691c12" data-id="4691c12" data-element_type="column">
                        <div className="vapetasia-column-wrap">
                          <div className="vapetasia-widget-wrap">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Newsletter