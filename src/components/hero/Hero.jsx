import React from "react";
import "./hero.css";
import * as heroes from "../../data/heroes.json";
import { useHistory, useParams } from "react-router-dom";

const baseUrl = "https://cdn2.vapetasia.com/img/hero/";

const Hero = (props) => {
  console.log(props);
  const { value, sizeOrBrand } = useParams();
  // console.log(topic, value, sizeOrBrand);
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url(" + baseUrl + heroes.default[0]["images"][props.heroClass],
        }}
        className={`vapetasia-element-page-hero vapetasia-section vapetasia-top-section vapetasia-element vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default`}
        data-id="HomeHero"
        data-element_type="section"
      >
        <div className="vapetasia-background-overlay"></div>
        <div className="vapetasia-container vapetasia-column-gap-no">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-9cefbfe"
              data-id="9cefbfe"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-8cc3ccf vapetasia-widget vapetasia-widget-spacer"
                    data-id="8cc3ccf"
                    data-element_type="widget"
                    data-widget_type="spacer.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-spacer">
                        <div
                          className="vapetasia-spacer-inner"
                          id="first-hero-spacer"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vapetasia-element vapetasia-element-6ecbbaf vapetasia-widget vapetasia-widget-spacer"
                    data-id="6ecbbaf"
                    data-element_type="widget"
                    data-widget_type="spacer.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-spacer">
                        <div
                          className="vapetasia-spacer-inner"
                          id="second-hero-spacer"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="force-visible vapetasia-element vapetasia-element-c8bed25 vapetasia-invisible vapetasia-widget vapetasia-widget-heading"
                    data-id="c8bed25"
                    data-element_type="widget"
                    data-settings='{"_animation":"fadeInDown"}'
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default">
                        {props.top}
                      </h2>
                    </div>
                  </div>
                  <div
                    className="force-visible vapetasia-element vapetasia-element-1d181d7 vapetasia-invisible vapetasia-widget vapetasia-widget-heading"
                    data-id="1d181d7"
                    data-element_type="widget"
                    data-settings='{"_animation":"fadeInUp"}'
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default">
                        {props.bottom}
                      </h2>
                    </div>
                  </div>
                  <div
                    className="vapetasia-element vapetasia-element-c611a82 vapetasia-widget vapetasia-widget-spacer"
                    data-id="c611a82"
                    data-element_type="widget"
                    data-widget_type="spacer.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-spacer">
                        <div className="vapetasia-spacer-inner hero-height-gap"></div>
                      </div>
                    </div>
                  </div>

                  <section
                    className="vapetasia-section vapetasia-inner-section vapetasia-element vapetasia-element-339b7fd vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
                    data-id="339b7fd"
                    data-element_type="section"
                  >
                    <div className="vapetasia-container vapetasia-column-gap-default">
                      <div className="vapetasia-row">
                        <div
                          className="vapetasia-column vapetasia-col-33 vapetasia-inner-column vapetasia-element vapetasia-element-1a9de7d hero-paragraph-detail"
                          data-id="1a9de7d"
                          data-element_type="column"
                        >
                          <div className="vapetasia-column-wrap vapetasia-element-populated">
                            <div className="vapetasia-widget-wrap">
                              <div
                                className="vapetasia-element vapetasia-element-a6dbbf1 vapetasia-widget vapetasia-widget-image"
                                data-id="a6dbbf1"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="vapetasia-widget-container">
                                  <div className="vapetasia-image">
                                    <img
                                      width="18"
                                      height="300"
                                      src="https://cdn2.vapetasia.com/img/hero/vertical-bar.png"
                                      className="attachment-medium size-medium lazyload"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="vapetasia-column vapetasia-col-33 vapetasia-inner-column vapetasia-element vapetasia-element-f640ba9"
                          data-id="f640ba9"
                          data-element_type="column"
                        >
                          <div className="vapetasia-column-wrap vapetasia-element-populated">
                            <div className="vapetasia-widget-wrap">
                              <div
                                className="vapetasia-element vapetasia-element-986625f vapetasia-widget vapetasia-widget-text-editor"
                                data-id="986625f"
                                data-element_type="widget"
                                id="hero-description"
                                data-widget_type="text-editor.default"
                              >
                                <div className="vapetasia-widget-container">
                                  <div className="vapetasia-text-editor vapetasia-clearfix">
                                    <p
                                      className={
                                        value !== "air-disposables" &&
                                        sizeOrBrand !== "air-disposables"
                                          ? "hero-paragraph-text"
                                          : "hero-paragraph-text-air"
                                      }
                                    >
                                      {props.paragraph}
                                    </p>
                                  </div>
                                </div>
                              </div>
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
  );
};

export default Hero;
