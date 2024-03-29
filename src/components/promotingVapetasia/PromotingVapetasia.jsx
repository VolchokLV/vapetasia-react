import React from "react";
import "./promotingVapetasia.css";

const PromotingVapetasia = () => {
  return (
    <>
      <section
        className="vapetasia-section-promoting vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-b4a7020 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="b4a7020"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-5181dc0"
              data-id="5181dc0"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-5bf22a9 vapetasia-widget vapetasia-widget-spacer"
                    data-id="5bf22a9"
                    data-element_type="widget"
                    data-widget_type="spacer.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-spacer">
                        <div className="vapetasia-spacer-inner"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vapetasia-element vapetasia-element-9b60fc0 vapetasia-widget vapetasia-widget-heading"
                    data-id="9b60fc0"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default">
                        are you promoting vapetasia?
                      </h2>
                    </div>
                  </div>
                  <div
                    className="vapetasia-element vapetasia-element-a59d4a0 vapetasia-widget vapetasia-widget-text-editor"
                    data-id="a59d4a0"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-text-editor vapetasia-clearfix promo-paragraph">
                        <p>
                          Access promotional graphics for all of
                          Vapetasia&#8217;s products to be used on websites,
                          social media, and in store. If you have a special
                          graphic request, you may submit a request and our
                          marketing team will get back to you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="promo-container">
                    <div className="promo-row">
                      <div
                        id="vapetasia-section-promoting"
                        className="promo-column"
                      >
                        <a
                          href={
                            process.env.REACT_APP_BASE_URL +
                            "/media-request"
                          }
                          className=" vapetasia-button-link vapetasia-button vapetasia-size-sm"
                          role="button"
                        >
                          <span className="vapetasia-button-text">
                            MEDIA REQUEST FORM
                          </span>
                        </a>
                      </div>

                      <div
                        id="vapetasia-section-promoting"
                        className="promo-column"
                      >
                        <a
                          href="https://www.dropbox.com/scl/fo/x1uhnn871zowslhowhdiu/h?dl=0&rlkey=5sd5gh6u3p5x12nij4h1tf3pm"
                          target="_blank"
                          className=" vapetasia-button-link vapetasia-button vapetasia-size-sm"
                          role="button"
                        >
                          <span className="vapetasia-button-text">
                            MEDIA PACKAGE
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <div
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromotingVapetasia;
