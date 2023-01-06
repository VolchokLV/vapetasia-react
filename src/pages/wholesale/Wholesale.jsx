import React, { useEffect, useState, useRef } from "react";
import { Hero } from "../../components";
import "./wholesale.css";
import * as distributors from "../../data/distributors.json";

const Wholesale = () => {
  let checking = false;
  const [userCoords, setUserCoords] = useState({ lat: 0, long: 0 });
  const [zip, setZip] = useState("");
  const [locationsLoading, setLocationsLoading] = useState(true);
  const locations = useRef(distributors.default);
  const [page, setPage] = useState(1);
  const pages = new Array(Math.ceil(distributors.default.length / 5)).fill(0);

  const getCoordsFromZip = () => {
    let route =
      "https://api.openweathermap.org/geo/1.0/zip?zip=" +
      zip +
      "&appid=647965af2adedadd2f90ab3299ca5db6";
    fetch(route)
      .then((res) => res.json())
      .then((data) => {
        if ("lat" in data) {
          setUserCoords({
            lat: data.lat,
            long: data.lon,
          });
          sortByDistance({
            lat: data.lat,
            long: data.lon,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const toRad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const getDistanceFromUser = async (coords, loc) => {
    if (coords.lat === 0 || coords.long === 0) return 0;
    var R = 3960; // Radius of the earth in miles
    var dLat = toRad(loc.coords.lat - coords.lat);
    var dLon = toRad(loc.coords.long - coords.long);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(coords.lat)) *
        Math.cos(toRad(loc.coords.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in miles
    return Math.round(d);
  };

  const sortRandomly = () => {
    /*
      Randomly order the distributors on initial load
      */
    let order = [];
    distributors.default.map((d, idx) => {
      order.push(idx);
    });
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    /*
      Create a new array mapping idx to link
      */
    let l = [];
    order.map((idx) => {
      l.push(distributors.default[idx]);
    });
    locations.current = l;
    setLocationsLoading(false);
  };

  const sortByDistance = async (userCoords) => {
    let l = distributors.default;
    let ld = await Promise.all(
      l.map(async (loc) => [loc, await getDistanceFromUser(userCoords, loc)])
    );
    ld.sort((a, b) => {
      return a[1] - b[1];
    });
    let lf = ld.map((loc) => {
      loc[0]["distance"] = loc[1];
      return loc[0];
    });
    locations.current = lf;
    setLocationsLoading(false);
  };

  const requestUserLocation = () => {
    if ("geolocation" in navigator) {
      /**
       * the response from this request may never return when
       * location has been disabled or blocked
       */
      navigator.geolocation.getCurrentPosition(async (position) => {
        setUserCoords({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        await sortByDistance({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        setLocationsLoading(false);
      });
    } else {
      console.log("geo not available in navigator");
      setLocationsLoading(false);
    }
  };

  const changePage = (to) => {
    setPage(to);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getCoordsFromZip();
    }
  };

  useEffect(() => {
    /**
     * immediately attempt to fetch user location
     */
    if (!checking) {
      checking = true;
      sortRandomly();
      requestUserLocation();
    }
  }, []);
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
      <section
        id="distributors-section"
        className="distributors-section vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-2b06a3a vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="2b06a3a"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div id="wholesaler-search">
              <input
                type="text"
                placeholder="Enter zip code"
                maxLength="5"
                onChange={(e) => setZip(e.target.value)}
                onKeyDown={handleKeyDown}
              ></input>
              <button type="submit" onClick={() => getCoordsFromZip()}>
                Find Closest Distributor
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="distributors-section vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-2b06a3a vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="2b06a3a"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div id="pagination-controls">
              {pages.map((p, idx) => {
                return (
                  <a
                    key={"pagination_" + idx}
                    className={page == idx + 1 ? "active" : "inactive"}
                    onClick={() => changePage(idx + 1)}
                  >
                    Page {idx + 1}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {locationsLoading ? (
        <div id="loading-distributors">Loading Distributors...</div>
      ) : (
        locations.current
          .slice(5 * (page - 1), 5 * (page - 1) + 5)
          .map((d, idx) => (
            <section
              key={"distributor_" + idx}
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
                          <div>
                            {userCoords.lat === 0 ||
                            userCoords.long === 0 ||
                            !("distance" in d) ? (
                              <div id="set-location-trigger">
                                <span
                                  className="location-button"
                                  onClick={() => {
                                    requestUserLocation();
                                  }}
                                >
                                  <i className="fa fa-map-marker"></i> enable
                                  location
                                </span>
                                <span>or set zip for distance</span>
                              </div>
                            ) : (
                              <div className="location-results">
                                {d.distance} miles
                              </div>
                            )}
                          </div>
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
          ))
      )}
      <section
        className="distributors-section vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-2b06a3a vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="2b06a3a"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="vapetasia-container vapetasia-column-gap-default">
          <div className="vapetasia-row">
            <div id="pagination-controls">
              {pages.map((p, idx) => {
                return (
                  <a
                    key={"pagination_" + idx}
                    className={page == idx + 1 ? "active" : "inactive"}
                    onClick={() => changePage(idx + 1)}
                  >
                    Page {idx + 1}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wholesale;
