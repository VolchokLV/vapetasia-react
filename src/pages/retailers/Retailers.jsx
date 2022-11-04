import React from "react";
import { Hero } from "../../components";
import "./retailers.css";
import * as retailers from "../../data/retailers.json";

const Retailers = () => {
  return (
    <>
      <Hero
        heroClass="Retailers"
        top={"Vapetasia"}
        bottom={"Retailers"}
        paragraph={
          "Below are authorized online retailers we reccomend for purchasing authentic Vapetasia products at the lowest costs.  "
        }
      ></Hero>

      <div className="vapetasia-retailers-section">
        {retailers.default.map((r) => (
          <section
            className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-51bd908 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
            data-id="51bd908"
            data-element_type="section"
          >
            <div
              id="retailers-section"
              className="vapetasia-container vapetasia-column-gap-default"
            >
              <div className="vapetasia-row">
                <div
                  className="vapetasia-column vapetasia-col-50 vapetasia-top-column vapetasia-element vapetasia-element-66eebbb"
                  data-id="66eebbb"
                  data-element_type="column"
                >
                  <div className="vapetasia-column-wrap vapetasia-element-populated">
                    <div className="vapetasia-widget-wrap">
                      <div
                        className="vapetasia-element vapetasia-element-e6fc53a vapetasia-widget vapetasia-widget-image"
                        data-id="e6fc53a"
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div className="vapetasia-widget-container">
                          <div className="vapetasia-image">
                            <a href={r.link} className="no-lightbox">
                              <img
                                width="150"
                                height="150"
                                src={r.img_url}
                                data-src={r.img_url}
                                className="attachment-thumbnail size-thumbnail lazyloaded"
                                alt="r.name"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="vapetasia-column vapetasia-col-50 vapetasia-top-column vapetasia-element vapetasia-element-804ac20"
                  data-id="804ac20"
                  data-element_type="column"
                >
                  <div className="vapetasia-column-wrap vapetasia-element-populated">
                    <div className="vapetasia-widget-wrap">
                      <div
                        className="vapetasia-element vapetasia-element-bee4c5b vapetasia-widget vapetasia-widget-heading"
                        data-id="bee4c5b"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="vapetasia-widget-container">
                          <h2 className="vapetasia-heading-title vapetasia-size-default">
                            {r.name}
                          </h2>
                        </div>
                      </div>
                      <div
                        className="vapetasia-element vapetasia-element-b666bf1 vapetasia-widget vapetasia-widget-heading"
                        data-id="b666bf1"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="vapetasia-widget-container">
                          <h2 className="vapetasia-heading-title vapetasia-size-large retailers-sublink">
                            <a href={r.link}>{r.name}</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        ;
        <div
          className="vapetasia-element vapetasia-element-1a5d1aa vapetasia-widget vapetasia-widget-spacer"
          data-id="1a5d1aa"
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
    </>
  );
};

export default Retailers;
