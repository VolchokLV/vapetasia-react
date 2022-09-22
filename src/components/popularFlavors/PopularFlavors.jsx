import React from 'react'
import {ProductImage} from './../../components';

const PopularFlavors = (props) => {
  return (
    <>
      <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-ad62d64 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="ad62d64" data-element_type="section">
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-cc49ab2" data-id="cc49ab2" data-element_type="column">
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div className="vapetasia-element vapetasia-element-d6fe1ec vapetasia-widget vapetasia-widget-heading" data-id="d6fe1ec" data-element_type="widget" data-widget_type="heading.default">
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default">our most popular FLAVORS</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          
      <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-986ba63 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="986ba63" data-element_type="section">
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-6140e64" data-id="6140e64" data-element_type="column">
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div className="vapetasia-element vapetasia-element-d0c92e5 premium-carousel-ripple-yes vapetasia-widget vapetasia-widget-premium-carousel-widget" data-id="d0c92e5" data-element_type="widget" data-widget_type="premium-carousel-widget.default">
                    <div className="vapetasia-widget-container">


                      <div id="vapetasia-carousel">
                        {/*</div><div id="premium-carousel-wrapper-d0c92e5" className="premium-carousel-wrapper premium-carousel-hidden carousel-wrapper-d0c92e5   premium-carousel-dots-below" data-settings="{&quot;vertical&quot;:false,&quot;slidesToScroll&quot;:1,&quot;slidesToShow&quot;:1,&quot;infinite&quot;:true,&quot;speed&quot;:300,&quot;fade&quot;:false,&quot;autoplay&quot;:true,&quot;autoplaySpeed&quot;:5000,&quot;draggable&quot;:true,&quot;touchMove&quot;:true,&quot;rtl&quot;:false,&quot;adaptiveHeight&quot;:false,&quot;variableWidth&quot;:false,&quot;cssEase&quot;:&quot;ease&quot;,&quot;pauseOnHover&quot;:true,&quot;centerMode&quot;:false,&quot;centerPadding&quot;:&quot;15px&quot;,&quot;arrows&quot;:true,&quot;dots&quot;:true,&quot;slidesDesk&quot;:1,&quot;slidesTab&quot;:1,&quot;slidesMob&quot;:1,&quot;animation&quot;:&quot;null&quot;,&quot;tabletBreak&quot;:1025,&quot;mobileBreak&quot;:768,&quot;navigation&quot;:[&quot;&quot;,&quot;&quot;]}">*/ }
                          
                        {/*<div className="premium-carousel-nav-dot"> 
                          <i className="fas fa-circle" aria-hidden="true"></i>
                        </div>
                        <div className="premium-carousel-nav-arrow-prev"> 
                          <a type="button" data-role="none" className="carousel-arrow carousel-prev" aria-label="Previous" role="button"> 
                            <i className="fas fa-angle-left" aria-hidden="true"></i> 
                          </a>
                        </div>
                        <div className="premium-carousel-nav-arrow-next"> 
                          <a type="button" data-role="none" className="carousel-arrow carousel-next" aria-label="Next" role="button"> 
                            <i className="fas fa-angle-right" aria-hidden="true"></i> 
                          </a>
                        </div>*/ }

                        <div id="premium-carousel-d0c92e5" className="premium-carousel-inner">
                          <div className="premium-carousel-template item-wrapper">
                            <div data-vapetasia-type="section" data-vapetasia-id="226" className="vapetasia vapetasia-226">
                              <div className="vapetasia-section-wrap">
                                <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-ca079a3 vapetasia-hidden-tablet vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="ca079a3" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                  <div className="vapetasia-container vapetasia-column-gap-default">
                                    <div className="vapetasia-row">


                                    {props.featured.map(p => (
                                      <div className="vapetasia-column vapetasia-col-20 vapetasia-top-column vapetasia-element vapetasia-element-2554927" data-id="2554927" data-element_type="column">
                                        <div className="vapetasia-column-wrap vapetasia-element-populated">

                                          <a href={'/product/' + p.product_slug + '/' + p.sizes.eliquid[0]}>
                                            <div className="vapetasia-widget-wrap">
                                              <div className="vapetasia-element vapetasia-element-1afe63e vapetasia-widget vapetasia-widget-image" data-id="1afe63e" data-element_type="widget" data-widget_type="image.default">
                                                <div className="vapetasia-widget-container">
                                                  <div className="vapetasia-image">
                                                    <ProductImage src={p.default_image}></ProductImage>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="vapetasia-element vapetasia-element-f6a7e19 vapetasia-widget vapetasia-widget-heading" data-id="f6a7e19" data-element_type="widget" data-widget_type="heading.default">
                                                <div className="vapetasia-widget-container">
                                                  <h2 className="vapetasia-heading-title vapetasia-size-default">
                                                    { p.product_name }
                                                  </h2>
                                                </div>
                                              </div>
                                              <div className="vapetasia-element vapetasia-element-2df3c18 vapetasia-widget vapetasia-widget-text-editor" data-id="2df3c18" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div className="vapetasia-widget-container">
                                                  <div className="vapetasia-text-editor vapetasia-clearfix">
                                                    <p>100ml | 3mg</p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    ))}

                                    
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>


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
    </>
  )
}

export default PopularFlavors