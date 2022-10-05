import React, {useState} from 'react'
import {Hero, ProductImage, ProductPopUp} from '../../components';
import './productShowcase.css';
import * as heroes from '../../data/heroes.json'

const ProductShowcase = (props) => {

  const [show, setShow] = useState(false)

  return (
    <>
      <Hero 
      heroClass={heroes.default[0]['flavors'][props.product.flavor_line[0]]}
      top={'Vapetasia'} 
      bottom={props.product.product_name} 
      paragraph={props.product.hero_txt} />

        <section class="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-293ee67 vapetasia-hidden-tablet vapetasia-hidden-phone vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="293ee67" data-element_type="section">
          <div class="vapetasia-container vapetasia-column-gap-default">
            <div class="vapetasia-row">
              <div class="vapetasia-column vapetasia-col-50 vapetasia-top-column vapetasia-element vapetasia-element-a21c6ba" data-id="a21c6ba" data-element_type="column">
                <div class="vapetasia-column-wrap vapetasia-element-populated">
                  <div class="vapetasia-widget-wrap">
                    <div class="vapetasia-element vapetasia-element-fea488e product-toggle-main-image vapetasia-widget vapetasia-widget-image" data-id="fea488e" data-element_type="widget" data-widget_type="image.default">
                      <div class="vapetasia-widget-container">
                        <div class="vapetasia-image">
                            <ProductImage src={props.product.default_image}></ProductImage>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vapetasia-column vapetasia-col-50 vapetasia-top-column vapetasia-element vapetasia-element-cde0dd2" data-id="cde0dd2" data-element_type="column">
                <div class="vapetasia-column-wrap vapetasia-element-populated">
                  <div class="vapetasia-widget-wrap">
                    <div class="vapetasia-element vapetasia-element-90d3114 vapetasia-widget vapetasia-widget-heading" data-id="90d3114" data-element_type="widget" data-widget_type="heading.default">
                      <div class="vapetasia-widget-container">
                        <h2 class="vapetasia-heading-title vapetasia-size-default">
                          {props.product.product_name}
                        </h2>
                      </div>
                    </div>

                    {/*STRENGTHS*/}
                    <section class="vapetasia-section vapetasia-inner-section vapetasia-element vapetasia-element-e78207a vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="e78207a" data-element_type="section">
                      <div class="vapetasia-container vapetasia-column-gap-default">
                        <div class="vapetasia-row">
                          {

                            props.product.product_types.includes('disposable') ?

                              props.product.disposable_strengths.map(strength => (
                                <div class="vapetasia-column vapetasia-col-16 vapetasia-inner-column vapetasia-element vapetasia-element-f23b596 product-strength-toggle-button" data-id="f23b596" data-element_type="column" data-image="https://vapetasia-wp.s3-us-west-2.amazonaws.com/USA_ICED+Milk+of+the+Poppy_100ml_0mg.png" data-strength="0">
                                  <div class="vapetasia-column-wrap vapetasia-element-populated">
                                    <div class="vapetasia-widget-wrap">
                                      <div class="vapetasia-element vapetasia-element-e3ef45e vapetasia-widget vapetasia-widget-button" data-id="e3ef45e" data-element_type="widget" data-widget_type="button.default">
                                        <div class="vapetasia-widget-container">
                                          <div class="vapetasia-button-wrapper"> 
                                            <a href="#" class="vapetasia-button-link vapetasia-button vapetasia-size-sm" role="button"> 
                                              <span class="vapetasia-button-content-wrapper"> 
                                                <span class="vapetasia-button-text">
                                                  {strength}
                                                </span> 
                                              </span> 
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            :
                          
                              props.product.strengths.eliquid.map(strength => (
                                <div class="vapetasia-column vapetasia-col-16 vapetasia-inner-column vapetasia-element vapetasia-element-f23b596 product-strength-toggle-button" data-id="f23b596" data-element_type="column" data-image="https://vapetasia-wp.s3-us-west-2.amazonaws.com/USA_ICED+Milk+of+the+Poppy_100ml_0mg.png" data-strength="0">
                                  <div class="vapetasia-column-wrap vapetasia-element-populated">
                                    <div class="vapetasia-widget-wrap">
                                      <div class="vapetasia-element vapetasia-element-e3ef45e vapetasia-widget vapetasia-widget-button" data-id="e3ef45e" data-element_type="widget" data-widget_type="button.default">
                                        <div class="vapetasia-widget-container">
                                          <div class="vapetasia-button-wrapper"> 
                                            <a href="#" class="vapetasia-button-link vapetasia-button vapetasia-size-sm" role="button"> 
                                              <span class="vapetasia-button-content-wrapper"> 
                                                <span class="vapetasia-button-text">
                                                  {strength}
                                                </span> 
                                              </span> 
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                          
                          }
                        </div>
                      </div>
                    </section>
                    
                    <div class="vapetasia-element vapetasia-element-44c712e vapetasia-widget vapetasia-widget-text-editor" data-id="44c712e" data-element_type="widget" data-widget_type="text-editor.default">
                      <div class="vapetasia-widget-container">
                        <div class="vapetasia-text-editor vapetasia-clearfix">
                          <p>
                            {props.product.sub_txt}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <section class="vapetasia-section vapetasia-inner-section vapetasia-element vapetasia-element-9c3d03c vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="9c3d03c" data-element_type="section">
                      <div class="vapetasia-container vapetasia-column-gap-default">
                        <div class="vapetasia-row">
                          <div class="vapetasia-column vapetasia-col-50 vapetasia-inner-column vapetasia-element vapetasia-element-8f72fea" data-id="8f72fea" data-element_type="column">
                            <div class="vapetasia-column-wrap vapetasia-element-populated">
                              <div class="vapetasia-widget-wrap">
                                <div class="vapetasia-element vapetasia-element-3d23da5 vapetasia-align-left btn-strength-0 vapetasia-widget vapetasia-widget-button" data-id="3d23da5" data-element_type="widget" data-widget_type="button.default">
                                  <div class="vapetasia-widget-container">
                                    <div class="vapetasia-button-wrapper"> 
                                      <a href="/store-locator" class="vapetasia-button-link vapetasia-button vapetasia-size-sm" role="button"> 
                                        <span class="vapetasia-button-content-wrapper">
                                          <span class="vapetasia-button-text">FIND RETAILER</span> 
                                        </span> 
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="vapetasia-column vapetasia-col-50 vapetasia-inner-column vapetasia-element vapetasia-element-cda79ef" data-id="cda79ef" data-element_type="column">
                            <div class="vapetasia-column-wrap vapetasia-element-populated">
                              <div class="vapetasia-widget-wrap">
                                <div class="vapetasia-element vapetasia-element-f33a760 vapetasia-align-left btn-strength-0 vapetasia-widget vapetasia-widget-button" data-id="f33a760" data-element_type="widget" data-widget_type="button.default">
                                  <div class="vapetasia-widget-container">
                                    <div class="vapetasia-button-wrapper"> 
                                      <a onClick={() => setShow(true)} class="vapetasia-orange vapetasia-button-link vapetasia-button vapetasia-size-sm" role="button"> 
                                        <span class="vapetasia-button-content-wrapper"> 
                                          <span class="vapetasia-button-text">BUY ONLINE</span> 
                                        </span> 
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    
                    <div class="vapetasia-element vapetasia-element-304f721 vapetasia-widget vapetasia-widget-spacer" data-id="304f721" data-element_type="widget" data-widget_type="spacer.default">
                      <div class="vapetasia-widget-container">
                        <div class="vapetasia-spacer">
                          <div class="vapetasia-spacer-inner">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductPopUp 
          show={show} 
          setShow={setShow}
          product={props.product} 
          buy_now_slug={'100ml'}></ProductPopUp>
    </>
  )
}

export default ProductShowcase