import React from "react";
import { ProductImage } from "./../../components";
import "./popularFlavors.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const PopularFlavors = (props) => {
  return (
    <>
      <section
        className="popular-section vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-ad62d64 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="ad62d64"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-cc49ab2"
              data-id="cc49ab2"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-d6fe1ec vapetasia-widget vapetasia-widget-heading"
                    data-id="d6fe1ec"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default">
                        our most popular FLAVORS
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-986ba63 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default vt-custom-carousel-wrapper"
        data-id="986ba63"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div id="vapetasia-carousel">
            <Carousel
              emulateTouch={true}
              swipeable={false}
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              interval={7000}
              showArrows={true}
              showIndicators={false}
              infiniteLoop={true}
            >
              <div className="vt-inner-carousel">
                {props.featured.map((p) => (
                  <div key={p.product_slug} className="vt-custom-carousel-item">
                    <div className="vapetasia-column-wrap vapetasia-element-populated">
                      <a
                        href={
                          "/product/" + p.product_slug + "/" + p.featured.size
                        }
                        className="vt-no-outline"
                      >
                        <div className="vapetasia-widget-wrap">
                          <div
                            className="vapetasia-element vapetasia-element-1afe63e vapetasia-widget vapetasia-widget-image"
                            data-id="1afe63e"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-image vt-custom-carousel-img">
                                <ProductImage
                                  src={p.default_image}
                                ></ProductImage>
                              </div>
                            </div>
                          </div>
                          <div
                            className="vapetasia-element vapetasia-element-f6a7e19 vapetasia-widget vapetasia-widget-heading"
                            data-id="f6a7e19"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div className="vapetasia-widget-container">
                              <h2 className="vapetasia-heading-title vt-custom-carousel-title">
                                {p.product_name}
                              </h2>
                            </div>
                          </div>
                          <div
                            className="vapetasia-element vapetasia-element-2df3c18 vapetasia-widget vapetasia-widget-text-editor"
                            data-id="2df3c18"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                          >
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-text-editor vapetasia-clearfix">
                                <p>
                                  {p.featured.size} | {p.featured.strength}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="vapetasia-element vapetasia-element-135443f vapetasia-tablet-align-center vapetasia-align-center vapetasia-widget vapetasia-widget-button"
                            data-id="135443f"
                            data-element_type="widget"
                            data-widget_type="button.default"
                          >
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-button-wrapper">
                                <div
                                  className="vapetasia-button-link vapetasia-button vapetasia-size-sm vt-custom-carousel-button"
                                  role="button"
                                  tabIndex="-1"
                                >
                                  <span className="vapetasia-button-content-wrapper">
                                    <span className="vapetasia-button-text">
                                      VIEW
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="vapetasia-container vapetasia-column-gap-default">
                <div id="vapetasia-carousel">
                  <div className="vt-inner-carousel">
                    {props.featured2.map((p) => (
                      <div
                        key={p.product_slug}
                        className="vt-custom-carousel-item"
                      >
                        <div className="vapetasia-column-wrap vapetasia-element-populated">
                          <a
                            href={
                              "/product/" +
                              p.product_slug +
                              "/" +
                              p.featured2.size
                            }
                            className="vt-no-outline"
                          >
                            <div className="vapetasia-widget-wrap">
                              <div
                                className="vapetasia-element vapetasia-element-1afe63e vapetasia-widget vapetasia-widget-image"
                                data-id="1afe63e"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="vapetasia-widget-container">
                                  <div className="vapetasia-image vt-custom-carousel-img">
                                    <ProductImage
                                      src={p.default_image}
                                    ></ProductImage>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vapetasia-element vapetasia-element-f6a7e19 vapetasia-widget vapetasia-widget-heading"
                                data-id="f6a7e19"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="vapetasia-widget-container">
                                  <h2 className="vapetasia-heading-title vt-custom-carousel-title">
                                    {p.product_name}
                                  </h2>
                                </div>
                              </div>
                              <div
                                className="vapetasia-element vapetasia-element-2df3c18 vapetasia-widget vapetasia-widget-text-editor"
                                data-id="2df3c18"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="vapetasia-widget-container">
                                  <div className="vapetasia-text-editor vapetasia-clearfix">
                                    <p>
                                      {p.featured2.size} |{" "}
                                      {p.featured2.strength}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vapetasia-element vapetasia-element-135443f vapetasia-tablet-align-center vapetasia-align-center vapetasia-widget vapetasia-widget-button"
                                data-id="135443f"
                                data-element_type="widget"
                                data-widget_type="button.default"
                              >
                                <div className="vapetasia-widget-container">
                                  <div className="vapetasia-button-wrapper">
                                    <div
                                      className="vapetasia-button-link vapetasia-button vapetasia-size-sm vt-custom-carousel-button"
                                      role="button"
                                      tabIndex="-1"
                                    >
                                      <span className="vapetasia-button-content-wrapper">
                                        <span className="vapetasia-button-text">
                                          VIEW
                                        </span>
                                      </span>
                                    </div>
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
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-986ba63 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default vt-custom-carousel-wrapper" data-id="986ba63" data-element_type="section">
        <div className="vapetasia-container vapetasia-column-gap-default">

          <div id="vapetasia-carousel">
            <div id="vt-inner-carousel" style={{width: 250*props.featured.length}}>

                {props.featured.map(p => (
                  <div key={p.product_slug} className="vt-custom-carousel-item">
                    <div className="vapetasia-column-wrap vapetasia-element-populated">

                      <a href={'/product/' + p.product_slug + '/' + p.featured.size} className="vt-no-outline">
                        <div className="vapetasia-widget-wrap">
                          <div className="vapetasia-element vapetasia-element-1afe63e vapetasia-widget vapetasia-widget-image" data-id="1afe63e" data-element_type="widget" data-widget_type="image.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-image vt-custom-carousel-img">
                                <ProductImage src={p.default_image}></ProductImage>
                              </div>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-f6a7e19 vapetasia-widget vapetasia-widget-heading" data-id="f6a7e19" data-element_type="widget" data-widget_type="heading.default">
                            <div className="vapetasia-widget-container">
                              <h2 className="vapetasia-heading-title vt-custom-carousel-title">
                                { p.product_name }
                              </h2>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-2df3c18 vapetasia-widget vapetasia-widget-text-editor" data-id="2df3c18" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-text-editor vapetasia-clearfix">
                                <p>{p.featured.size} | {p.featured.strength}</p>
                              </div>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-135443f vapetasia-tablet-align-center vapetasia-align-center vapetasia-widget vapetasia-widget-button" data-id="135443f" data-element_type="widget" data-widget_type="button.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-button-wrapper"> 
                                <div className="vapetasia-button-link vapetasia-button vapetasia-size-sm vt-custom-carousel-button" role="button" tabIndex="-1"> 
                                  <span className="vapetasia-button-content-wrapper"> 
                                    <span className="vapetasia-button-text">VIEW</span> 
                                  </span> 
                                </div>
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
        </div>
      </section> */}
      {/* <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-986ba63 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default vt-custom-carousel-wrapper" data-id="986ba63" data-element_type="section">
        <div className="vapetasia-container vapetasia-column-gap-default">
                 
          <div id="vapetasia-carousel">
            <div id="vt-inner-carousel" style={{width: 250*props.featured2.length}}>

                {props.featured2.map(p => (
                  <div key={p.product_slug} className="vt-custom-carousel-item">
                    <div className="vapetasia-column-wrap vapetasia-element-populated">

                      <a href={'/product/' + p.product_slug + '/' + p.featured2.size} className="vt-no-outline">
                        <div className="vapetasia-widget-wrap">
                          <div className="vapetasia-element vapetasia-element-1afe63e vapetasia-widget vapetasia-widget-image" data-id="1afe63e" data-element_type="widget" data-widget_type="image.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-image vt-custom-carousel-img">
                                <ProductImage src={p.default_image}></ProductImage>
                              </div>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-f6a7e19 vapetasia-widget vapetasia-widget-heading" data-id="f6a7e19" data-element_type="widget" data-widget_type="heading.default">
                            <div className="vapetasia-widget-container">
                              <h2 className="vapetasia-heading-title vt-custom-carousel-title">
                                { p.product_name }
                              </h2>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-2df3c18 vapetasia-widget vapetasia-widget-text-editor" data-id="2df3c18" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-text-editor vapetasia-clearfix">
                                <p>{p.featured2.size} | {p.featured2.strength}</p>
                              </div>
                            </div>
                          </div>
                          <div className="vapetasia-element vapetasia-element-135443f vapetasia-tablet-align-center vapetasia-align-center vapetasia-widget vapetasia-widget-button" data-id="135443f" data-element_type="widget" data-widget_type="button.default">
                            <div className="vapetasia-widget-container">
                              <div className="vapetasia-button-wrapper"> 
                                <div className="vapetasia-button-link vapetasia-button vapetasia-size-sm vt-custom-carousel-button" role="button" tabIndex="-1"> 
                                  <span className="vapetasia-button-content-wrapper"> 
                                    <span className="vapetasia-button-text">VIEW</span> 
                                  </span> 
                                </div>
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
        </div>
      </section> */}
    </>
  );
};

export default PopularFlavors;
