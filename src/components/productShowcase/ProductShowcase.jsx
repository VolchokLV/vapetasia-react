import React, { useState, useParams } from "react";
import { Hero, ProductImage, ProductPopUp } from "../../components";
import "./productShowcase.css";
import * as heroes from "../../data/heroes.json";

const ProductShowcase = (props) => {
  /**
   * SORT OUT IMAGE LOGIC FOR DISPLAY AND UNIT (MODAL)
   */
  let imgSrc = ""; //TODO: set default image
  let imgSrcDisplay = ""; //TODO ^^
  let buyNowSlug = "";
  let strengthSlug = "eliquid";
  if (props.product.product_types[0] === "disposable") {
    imgSrc = props.product["img_src"]["product"];
    imgSrcDisplay = props.product["img_src"]["display"];
    buyNowSlug = "only";
    strengthSlug = "disposable";
  } else {
    imgSrc = props.product.img_src[props.sizeOrBrand];
    imgSrcDisplay = imgSrc;
    buyNowSlug = props.sizeOrBrand; //in this case it's always size (not disposable)
    if (props.sizeOrBrand === "30ml") {
      strengthSlug = "salt";
    }
  }
  // console.log(props.sizeOrBrand);
  const [show, setShow] = useState(false);

  return (
    <>
      <Hero
        heroClass={heroes.default[0]["flavors"][props.product.flavor_line[0]]}
        top={"Vapetasia"}
        bottom={props.product.product_name}
        paragraph={props.product.hero_txt}
        id={
          props.sizeOrBrand === "air-disposables"
            ? "hero-description-air"
            : "hero-description"
        }
      />

      <section
        className="vapetasia-section-center-on-mobile vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-293ee67 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="293ee67"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default vapetasia-product-showcase">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-50 vapetasia-top-column vapetasia-element vapetasia-element-a21c6ba"
              data-id="a21c6ba"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-fea488e product-toggle-main-image vapetasia-widget vapetasia-widget-image"
                    data-id="fea488e"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-image mini-on-mobile main-product-image">
                        <ProductImage src={imgSrcDisplay}></ProductImage>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="vapetasia-column vapetasia-col-50 vapetasia-top-column vapetasia-element vapetasia-element-cde0dd2"
              data-id="cde0dd2"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-90d3114 vapetasia-widget vapetasia-widget-heading"
                    data-id="90d3114"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default">
                        {props.product.product_name}
                      </h2>
                      {strengthSlug !== "disposable" ? (
                        <h2 className="vapetasia-heading-subtitle vapetasia-size-default">
                          {strengthSlug} {props.sizeOrBrand}
                        </h2>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  {/*STRENGTHS*/}
                  <section
                    className="vapetasia-section vapetasia-inner-section vapetasia-element vapetasia-element-e78207a vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
                    data-id="e78207a"
                    data-element_type="section"
                  >
                    <div className="vapetasia-container">
                      <div className="vapetasia-custom-button-row">
                        {props.product.product_types.includes("disposable")
                          ? props.product.disposable_strengths.map(
                            (strength) => (
                              <div
                                key={"p" + strength}
                                className="vapetasia-element-f23b596 product-strength-toggle-button"
                                data-id="f23b596"
                                data-element_type="column"
                                data-strength="0"
                              >
                                <div className="vapetasia-widget-wrap">
                                  <div
                                    className="vapetasia-element vapetasia-element-e3ef45e vapetasia-widget vapetasia-widget-button"
                                    data-id="e3ef45e"
                                    data-element_type="widget"
                                    data-widget_type="button.default"
                                  >
                                    <div className="vapetasia-widget-container">
                                      <div className="vapetasia-button-wrapper">
                                        <a
                                          href="#"
                                          className="vapetasia-button-link vapetasia-button vapetasia-size-sm "
                                          role="button"
                                        >
                                          <span className="vapetasia-button-content-wrapper">
                                            <span className="vapetasia-button-text vapetasia-strength-button">
                                              {strength}
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )

                          : props.product.strengths[strengthSlug].map(
                            (strength) => (
                              <div
                                key={"p" + strength}
                                className="vapetasia-element-f23b596 product-strength-toggle-button"
                                data-id="f23b596"
                                data-strength="0"
                              >
                                <div className="vapetasia-widget-wrap">
                                  <div
                                    className="vapetasia-element vapetasia-element-e3ef45e vapetasia-widget vapetasia-widget-button"
                                    data-id="e3ef45e"
                                    data-element_type="widget"
                                    data-widget_type="button.default"
                                  >
                                    <div className="vapetasia-widget-container">
                                      <div className="vapetasia-button-wrapper">
                                        <a
                                          className="vapetasia-button-link vapetasia-button vapetasia-size-sm"
                                          role="button"
                                        >
                                          <span className="vapetasia-button-content-wrapper">
                                            <span className="vapetasia-button-text vapetasia-strength-button">
                                              {strength}
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  </section>

                  <div
                    className="vapetasia-element vapetasia-element-44c712e vapetasia-widget vapetasia-widget-text-editor"
                    data-id="44c712e"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-text-editor vapetasia-clearfix">
                        <p>{props.product.sub_txt}</p>
                      </div>
                    </div>
                  </div>

                  <section
                    className="vapetasia-section vapetasia-inner-section vapetasia-element vapetasia-element-9c3d03c vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
                    data-id="9c3d03c"
                    data-element_type="section"
                  >
                    <div className="vapetasia-custom-button-row">
                      <div className="vapetasia-button-wrapper">
                        <a
                          href="/store-locator"
                          className="vapetasia-button-link vapetasia-button"
                          role="button"
                        >
                          <span className="vapetasia-button-content-wrapper">
                            <span className="vapetasia-button-text">
                              FIND RETAILER
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="vapetasia-button-wrapper">
                        <a
                          onClick={() => setShow(true)}
                          className="vapetasia-orange vapetasia-button-link vapetasia-button vapetasia-size-sm"
                          role="button"
                        >
                          <span className="vapetasia-button-content-wrapper">
                            <span className="vapetasia-button-text">
                              BUY ONLINE
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </section>

                  <div
                    className="vapetasia-element vapetasia-element-304f721 vapetasia-widget vapetasia-widget-spacer"
                    data-id="304f721"
                    data-element_type="widget"
                    data-widget_type="spacer.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-spacer">
                        <div className="vapetasia-spacer-inner"></div>
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
        imgSrc={imgSrc}
        product={props.product}
        buyNowSlug={buyNowSlug}
      ></ProductPopUp>
    </>
  );
};

export default ProductShowcase;
