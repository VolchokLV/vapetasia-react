import React from "react";
import "./blog.css";
import { Hero } from "../../components";
import * as posts from "../../data/blog.json";

const Blog = () => {
  /*const slugify = (str) => {
      return str.toLowerCase().explode(' ').join('-');
   }*/
  return (
    <>
      <Hero
        heroClass="Blog"
        top={""}
        bottom={"BLOG"}
        paragraph={
          "Stay alert on the most up-to-date information regarding the vape industry and vape advocacy calls to action!"
        }
      ></Hero>
      <section
        className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-9872422 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="9872422"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-660bdd5"
              data-id="660bdd5"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-7a977f0 vapetasia-widget-divider--view-line vapetasia-widget vapetasia-widget-divider"
                    data-id="7a977f0"
                    data-element_type="widget"
                    data-widget_type="divider.default"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-f9b095e vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="f9b095e"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-8e6b34a"
              data-id="8e6b34a"
              data-element_type="column"
              data-settings='{"background_background":"classic"}'
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap blog-heading-container">
                  <div
                    className="vapetasia-element vapetasia-element-21aa2d1 vapetasia-widget vapetasia-widget-heading"
                    data-id="21aa2d1"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container">
                      <h2 className="vapetasia-heading-title vapetasia-size-default blog-heading">
                        LATEST
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
        className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-9872422 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="9872422"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-660bdd5"
              data-id="660bdd5"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-7a977f0 vapetasia-widget-divider--view-line vapetasia-widget vapetasia-widget-divider"
                    data-id="7a977f0"
                    data-element_type="widget"
                    data-widget_type="divider.default"
                  >
                    <div className="vapetasia-widget-container">
                      <div className="vapetasia-divider">
                        {" "}
                        <span className="vapetasia-divider-separator"> </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {posts.default.map((p) => {
        return (
          <div key={p.post_slug}>
            <section
              id="blog-section"
              className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-da24a34 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
              data-id="da24a34"
              data-element_type="section"
            >
              <div className="vapetasia-container vapetasia-column-gap-default">
                <div className="vapetasia-row vapetasia-blog-entry">
                  <div
                    className="vapetasia-column vapetasia-col-33 vapetasia-top-column vapetasia-element vapetasia-element-63044c7"
                    data-id="63044c7"
                    data-element_type="column"
                  >
                    <div className="vapetasia-column-wrap vapetasia-element-populated">
                      <div className="vapetasia-widget-wrap">
                        <div
                          className="vapetasia-element vapetasia-element-cf3292e vapetasia-widget vapetasia-widget-image"
                          data-id="cf3292e"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="vapetasia-widget-container">
                            <div className="vapetasia-image">
                              <a
                                href={
                                  process.env.REACT_APP_BASE_URL +
                                  "/" +
                                  p.post_slug
                                }
                                className="no-lightbox"
                              >
                                <img
                                  width="360"
                                  height="360"
                                  src={
                                    "https://cdn2.vapetasia.com/img/blog/" +
                                    p.thumbnail
                                  }
                                  className="attachment-large size-large lazyloaded"
                                  alt={"Thumbnail for " + p.post_title}
                                ></img>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vapetasia-column vapetasia-col-66 vapetasia-top-column vapetasia-element vapetasia-element-9885b06"
                    data-id="9885b06"
                    data-element_type="column"
                  >
                    <div className="vapetasia-column-wrap vapetasia-element-populated">
                      <div className="vapetasia-widget-wrap">
                        <div
                          className="vapetasia-element vapetasia-element-34b6f8c vapetasia-widget vapetasia-widget-spacer"
                          data-id="34b6f8c"
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
                          className="vapetasia-element vapetasia-element-b15be63 vapetasia-widget vapetasia-widget-heading"
                          data-id="b15be63"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="vapetasia-widget-container">
                            <h2 className="vapetasia-heading-title vapetasia-size-default">
                              {p.post_title}
                            </h2>
                          </div>
                        </div>
                        <div
                          className="vapetasia-element vapetasia-element-aff3605 vapetasia-widget vapetasia-widget-text-editor"
                          data-id="aff3605"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="vapetasia-widget-container">
                            <div className="vapetasia-text-editor vapetasia-clearfix">
                              <p>
                                <span data-preserver-spaces="true">
                                  {p.summary}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="vapetasia-element vapetasia-element-c07aa5b vapetasia-align-center vapetasia-widget vapetasia-widget-button"
                          data-id="c07aa5b"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="vapetasia-widget-container">
                            <div className="vapetasia-button-wrapper">
                              <a
                                href={
                                  process.env.REACT_APP_BASE_URL +
                                  "/" +
                                  p.post_slug
                                }
                                className="vapetasia-button-link vapetasia-button vapetasia-size-sm"
                                role="button"
                              >
                                <span className="vapetasia-button-content-wrapper">
                                  <span className="vapetasia-button-text">
                                    READ MORE
                                  </span>
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
          </div>
        );
      })}
    </>
  );
};

export default Blog;
