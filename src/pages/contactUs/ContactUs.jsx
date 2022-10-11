import React from 'react'
import { Hero, LetsGetSocial } from '../../components'

const ContactUs = () => {
  return (
    <>
    <Hero heroClass="Support" top={'Vapetasia'} bottom={'CONTACT FORM'} paragraph={'Don’t hesitate to contact us with any questions or concerns. We pride ourselves on giving the best customer service possible!'}></Hero>
    <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-9872422 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="9872422" data-element_type="section">
      <div className="vapetasia-container vapetasia-column-gap-default">
        <div className="vapetasia-row">
          <div className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-660bdd5" data-id="660bdd5" data-element_type="column">
            <div className="vapetasia-column-wrap vapetasia-element-populated">
              <div className="vapetasia-widget-wrap">
                <div className="vapetasia-element vapetasia-element-7a977f0 vapetasia-widget-divider--view-line vapetasia-widget vapetasia-widget-divider" data-id="7a977f0" data-element_type="widget" data-widget_type="divider.default">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <iframe title="Contact Us" src={process.env.PUBLIC_URL +'/contact.html'} height="700px"></iframe>
    <LetsGetSocial />
    </>
  )
}

export default ContactUs