import React from 'react'
import {ProductImage } from '../../components';
import './productPopUp.css'
import * as stores from '../../data/stores.json'

const ProductPopUp = (props) => {
  const storeFromURL = (url) => {
    if (url.indexOf('ejuices.com') > -1) {
      return stores.default[0]['stores']['ejuices.com'];
    } else if (url.indexOf('elementvape.com') > -1) {
      return stores.default[0]['stores']['elementvape.com'];
    } else if (url.indexOf('vape.com') > -1) {
      return stores.default[0]['stores']['vape.com'];
    } else if (url.indexOf('vapesocietysupplies.com' > -1)) {
      return stores.default[0]['stores']['vapesocietysupplies.com'];
    }
  }
  return (
    <div className={`${props.show ? "showProductModal" : "hideProductModal"} dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox vapetasia-popup-modal`} id="vapetasia-popup-modal-5469">
      <div className="dialog-widget-content dialog-lightbox-widget-content animated">
        <div className="dialog-header dialog-lightbox-header">
        </div>
          <div className="dialog-message dialog-lightbox-message">
            <div className="showProductModal vapetasia vapetasia-5469 vapetasia-location-popup">
              <div className="vapetasia-section-wrap">
                <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-1e770d55 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default vapetasia-product-modal-wrapper" data-id="1e770d55" data-element_type="section">
                  <div className="vapetasia-container vapetasia-column-gap-no">
                    <div className="vapetasia-row">
                      <div className="vapetasia-column vapetasia-col-50 vapetasia-top-column vapetasia-element vapetasia-element-51fcf799" data-id="51fcf799" data-element_type="column">
                        <div className="vapetasia-column-wrap vapetasia-element-populated">
                          <div className="vapetasia-widget-wrap">
                            <div className="vapetasia-element vapetasia-element-2ec666de vapetasia-widget vapetasia-widget-image" data-id="2ec666de" data-element_type="widget" data-widget_type="image.default">
                              <div className="vapetasia-widget-container">
                                <div className="vapetasia-image"> 
                                  <ProductImage src={props.imgSrc}></ProductImage>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <div className="vapetasia-column vapetasia-col-50 vapetasia-top-column vapetasia-element vapetasia-element-42ee872a" data-id="42ee872a" data-element_type="column">
                      <div className="vapetasia-column-wrap vapetasia-element-populated">
                        <div className="vapetasia-widget-wrap">
                          <div className="vapetasia-element vapetasia-element-6072090d vapetasia-widget vapetasia-widget-spacer" data-id="6072090d" data-element_type="widget" data-widget_type="spacer.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-spacer">
                                <div className="vapetasia-spacer-inner"></div>
                              </div>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-2ade2736 vapetasia-widget vapetasia-widget-heading" data-id="2ade2736" data-element_type="widget" data-widget_type="heading.default">
                            <div className="vapetasia-widget-container">
                              <h2 className="vapetasia-heading-title vapetasia-size-default">
                                {props.product.product_name}<br />
                              </h2>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-fb30aef vapetasia-widget vapetasia-widget-text-editor" data-id="fb30aef" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-text-editor vapetasia-clearfix">
                                <p>{props.product.popup_txt}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-7d52d324 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="7d52d324" data-element_type="section">
                <div className="vapetasia-container vapetasia-column-gap-default">
                  <div className="vapetasia-row">
                    <div className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-1c7d44a6" data-id="1c7d44a6" data-element_type="column">
                      <div className="vapetasia-column-wrap vapetasia-element-populated">
                        <div className="vapetasia-widget-wrap">
                          <div className="vapetasia-element vapetasia-element-7644b471 vapetasia-widget vapetasia-widget-heading" data-id="7644b471" data-element_type="widget" data-widget_type="heading.default">
                            <div className="vapetasia-widget-container">
                              <h2 className="vapetasia-heading-title vapetasia-size-default">online retail stores</h2>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-40fe6520 vapetasia-widget vapetasia-widget-text-editor" data-id="40fe6520" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-text-editor vapetasia-clearfix">
                                <p>Choose from a variety of our online retail stores, all stores listed are equipped with stock from one of our trusted distributors to ensure quality, and authenticity for every bottle of Vapetasia Eliquid.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
                
              <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-2d92b12d vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="2d92b12d" data-element_type="section">
                <div className="vapetasia-container vapetasia-column-gap-default">
                  <div className="vapetasia-row">
                    {props.product.buy_now[props.buyNowSlug].map(retailerLink => (
                      <div key={retailerLink} className="vapetasia-column vapetasia-col-33 vapetasia-top-column vapetasia-element vapetasia-element-4dc8305d" data-id="4dc8305d" data-element_type="column">
                        <div className="vapetasia-column-wrap vapetasia-element-populated">
                          <div className="vapetasia-widget-wrap">
                            <div className="vapetasia-element vapetasia-element-6c50dac4 vapetasia-widget vapetasia-widget-image" data-id="6c50dac4" data-element_type="widget" data-widget_type="image.default">
                              <div className="vapetasia-widget-container">
                                <div className="vapetasia-image"> 
                                  <a href={retailerLink}> 
                                    <img width="240" height="240" src={storeFromURL(retailerLink)['img_url']} className="attachment-large size-large" alt="" /> 
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="vapetasia-element vapetasia-element-e91ca4a vapetasia-widget vapetasia-widget-heading" data-id="e91ca4a" data-element_type="widget" data-widget_type="heading.default">
                              <div className="vapetasia-widget-container">
                                <h2 className="vapetasia-heading-title vapetasia-size-default">
                                  <a href={retailerLink}>{storeFromURL(retailerLink)['name']}</a>
                                </h2>
                              </div>
                            </div>
                            <div className="vapetasia-element vapetasia-element-2856fdf9 vapetasia-align-center vapetasia-widget vapetasia-widget-button" data-id="2856fdf9" data-element_type="widget" data-widget_type="button.default">
                              <div className="vapetasia-widget-container">
                                <div className="vapetasia-button-wrapper"> 
                                  <a href={retailerLink} className="vapetasia-button-link vapetasia-button vapetasia-size-md" role="button"> 
                                    <span className="vapetasia-button-content-wrapper"> 
                                      <span className="vapetasia-button-text">BUY NOW</span> 
                                    </span> 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <a onClick={() => props.setShow(false)}>
          <div className="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"></div>
          <div className="dialog-close-button dialog-lightbox-close-button fa fa-times"></div>
        </a>
      </div>
    </div>
  )
}

export default ProductPopUp