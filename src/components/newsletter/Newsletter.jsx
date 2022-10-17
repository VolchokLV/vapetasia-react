import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './newsletter.css'

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lz6bg3h', 'template_r9qt37s', form.current, 'y0SHW5CdIrH4sQyfD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <>
      <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-16ea1b8 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="16ea1b8" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
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
                              <div className="vapetasia-element vapetasia-element-7e2f1dd vapetasia-button-align-stretch vapetasia-widget vapetasia-widget-form" data-id="7e2f1dd" data-element_type="widget" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                                <div className="vapetasia-widget-container">
                                  <form className="vapetasia-form" method="post" name="New Form"> <input type="hidden" name="post_id" value="191" /> <input type="hidden" name="form_id" value="7e2f1dd" /> <input type="hidden" name="referer_title" value="" /> <input type="hidden" name="queried_id" value="191" />
                                    <div className="vapetasia-form-fields-wrapper vapetasia-labels-">
                                      <div className="vapetasia-field-type-email vapetasia-field-group vapetasia-column vapetasia-field-group-email vapetasia-col-100 vapetasia-field-required"> <input size="1" type="email" name="form_fields[email]" id="form-field-email" className="vapetasia-field vapetasia-size-sm  vapetasia-field-textual" placeholder="Email" required="required" aria-required="true" />
                                      </div>
                                      <div className="vapetasia-field-group vapetasia-column vapetasia-field-type-submit vapetasia-col-100 e-form__buttons"> <button ref={form} onSubmit={sendEmail} type="submit" className="vapetasia-button-newsletter vapetasia-button vapetasia-size-sm"> <span> <span className=" vapetasia-button-icon"> </span> <span className="vapetasia-button-text">Sign up now</span> </span> </button>
                                      </div>
                                    </div>
                                  </form>
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