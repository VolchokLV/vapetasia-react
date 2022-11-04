import React from "react";
import { Hero } from "../../components";
import "./wholesale.css";
import * as distributors from "../../data/distributors.json";

const Wholesale = () => {
  return (
    <>
      <Hero
        heroClass="Wholesale"
        top={"Vapetasia"}
        bottom={"Wholesale Inquiry"}
        paragraph={
          "Interested in registering for a wholesale account to resell Vapetasia products? Click the link below to submit an inquiry and we will follow up with you soon! "
        }
      ></Hero>
      <section
        id="wholesale-section"
        className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-3d7ced4 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        // data-id="3d7ced4"
        // data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-8a8f43b"
              // data-id="8a8f43b"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-bff50e1 vapetasia-widget vapetasia-widget-heading"
                    data-id="bff50e1"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-button vapetasia-button-wholesale vapetasia-slide-button vapetasia-size-lg">
                        <a
                          href={
                            process.env.REACT_APP_BASE_URL +
                            "/wholesale-registration/"
                          }
                        >
                          WHOLESALE REGISTRATION
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
      <section
        id="wholesale-section"
        className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-3d7ced4 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        // data-id="3d7ced4"
        // data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-8a8f43b"
              data-id="8a8f43b"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-bff50e1 vapetasia-widget vapetasia-widget-heading"
                    data-id="bff50e1"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default">
                        OUR TRUSTED DISTRIBUTORS
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
        id="wholesale-section"
        className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-3e67988 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="3e67988"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-b582092"
              data-id="b582092"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-8fe2c9d vapetasia-widget vapetasia-widget-text-editor"
                    data-id="8fe2c9d"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-text-editor vapetasia-clearfix distributor-paragraph">
                        <p>
                          In an effort to make your life ordering for your
                          retail store just a little bit easier, at Vapetasia we
                          work closely with and exclusively sell through our
                          authorized distributors for all wholesale inquiries.
                          Feel free to contact or order Vapetasia and other
                          vaping hardware and products through the distributors
                          below
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
      {distributors.default.map((d) => (
        <section
          id="distributors-section"
          className="distributors-section vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-2b06a3a vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
          data-id="2b06a3a"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="vapetasia-container vapetasia-column-gap-default">
            <div className="vapetasia-row">
              <div
                className="vapetasia-column vapetasia-col-16 vapetasia-top-column vapetasia-element vapetasia-element-0b73e85"
                data-id="0b73e85"
                data-element_type="column"
              >
                <div className="vapetasia-column-wrap vapetasia-element-populated">
                  <div className="vapetasia-widget-wrap">
                    <div
                      className="vapetasia-element vapetasia-element-1219de6 vapetasia-widget vapetasia-widget-image"
                      data-id="1219de6"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="vapetasia-widget-container">
                        <div className="vapetasia-image">
                          <a href={d.name} className="no-lightbox">
                            <img
                              width="652"
                              height="550"
                              src={d.img_url}
                              data-src={d.img_url}
                              className="attachment-large size-large lazyloaded"
                              alt={d.name}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="vapetasia-column vapetasia-col-66 vapetasia-top-column vapetasia-element vapetasia-element-6d3f1ae"
                data-id="6d3f1ae"
                data-element_type="column"
              >
                <div className="vapetasia-column-wrap vapetasia-element-populated">
                  <div className="vapetasia-widget-wrap">
                    <div
                      className="vapetasia-element vapetasia-element-396dbc8 vapetasia-widget vapetasia-widget-heading"
                      data-id="396dbc8"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="vapetasia-widget-container">
                        <h2 className="vapetasia-heading-title vapetasia-size-default distributor-name">
                          {d.name}
                        </h2>
                      </div>
                    </div>
                    <div
                      className="vapetasia-element vapetasia-element-2b020cf vapetasia-widget vapetasia-widget-heading"
                      data-id="2b020cf"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="vapetasia-widget-container">
                        <h2 className="wholesale-heading-url vapetasia-size-default site-url">
                          <a href={d.link}>{d.site_url}</a>
                        </h2>
                      </div>
                    </div>
                    <div
                      className="vapetasia-element vapetasia-element-05ceac2 vapetasia-widget vapetasia-widget-heading"
                      data-id="05ceac2"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="vapetasia-widget-container">
                        <h2 className="wholesale-heading-phone vapetasia-size-default location-phone">
                          {d.location_phone}
                        </h2>
                      </div>
                    </div>
                    <div
                      className="vapetasia-element vapetasia-element-00c2da5 vapetasia-widget vapetasia-widget-text-editor"
                      data-id="00c2da5"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="vapetasia-widget-container">
                        <div className="vapetasia-text-editor vapetasia-clearfix distributor-address">
                          <p>{d.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="vapetasia-column vapetasia-col-16 vapetasia-top-column vapetasia-element vapetasia-element-35bf2a6"
                data-id="35bf2a6"
                data-element_type="column"
              >
                <div className="vapetasia-column-wrap vapetasia-element-populated">
                  <div className="vapetasia-widget-wrap">
                    <div
                      className="vapetasia-element vapetasia-element-b7741f0 vapetasia-widget vapetasia-widget-image"
                      data-id="b7741f0"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="vapetasia-widget-container">
                        <div className="vapetasia-button vapetasia-button-wholesale vapetasia-slide-button vapetasia-size-lg">
                          <a href={d.contact}>CONTACT</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </section>
      ))}
      ;
    </>
  );
};

export default Wholesale;
