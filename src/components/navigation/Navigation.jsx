import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import "./navigation.css";

const getTop = (el) =>
  el.offsetTop + (el.offsetParent && getTop(el.offsetParent));

const Navigation = () => {
  const [searchVal, setSearchVal] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuFlavor, setSubMenuFlavor] = useState("closed");
  const [subMenuDisposable, setSubMenuDisposable] = useState("closed");
  const [subMenuContact, setSubMenuContact] = useState("closed");

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.getElementById("mobile-dropdown").style.height = "0";
    } else {
      setMenuOpen(true);
      document.getElementById("mobile-dropdown").style.height = "400px";
    }
  };

  const toggleSub = (e, subKey) => {
    e.preventDefault();
    switch (subKey) {
      case "Flavor":
        if (subMenuFlavor === "closed") {
          setSubMenuFlavor("open");
        } else {
          setSubMenuFlavor("closed");
        }
        break;
      case "Disposable":
        if (subMenuDisposable === "closed") {
          setSubMenuDisposable("open");
        } else {
          setSubMenuDisposable("closed");
        }
        break;
      case "Contact":
        if (subMenuContact === "closed") {
          setSubMenuContact("open");
        } else {
          setSubMenuContact("closed");
        }
        break;
      default:
        break;
    }
  };

  const resizeNav = () => {
    const start = document.querySelector(".last-to-falloff");
    const end = document.querySelector(".first-to-falloff");
    const startTop = getTop(start);
    const endTop = getTop(end);

    if (startTop < endTop) {
      document.getElementById("site-navigation-wrap").style.height = "160px";
    } else {
      document.getElementById("site-navigation-wrap").style.height = "80px";
    }
  };

  useEffect(() => {
    resizeNav();

    window.addEventListener("resize", () => {
      resizeNav();
      /*also when resizing need to close the mobile menu if it's left open*/
      if (window.innerWidth <= 776) {
        document.getElementById("mobile-dropdown").style.height = "0";
      }
    });
  });

  return (
    <header
      id="site-header"
      className="minimal-header search-overlay left-menu effect-one clr"
      data-height="74"
      itemScope="itemscope"
      itemType="https://schema.org/WPHeader"
      role="banner"
    >
      <div id="site-header-inner" className="clr container">
        <div
          id="site-logo"
          className="clr"
          itemScope=""
          itemType="https://schema.org/Brand"
        >
          <div id="site-logo-inner" className="clr">
            <a
              href={process.env.REACT_APP_BASE_URL}
              className="custom-logo-link"
              rel="home"
              aria-current="page"
            >
              <img
                width="247"
                height="70"
                src="https://cdn2.vapetasia.com/img/vapetasia-logo-small.png"
                className="custom-logo"
                alt="Vapetasia"
                srcSet="https://cdn2.vapetasia.com/img/vapetasia-logo-small.png 1x, https://cdn2.vapetasia.com/img/vapetasia-logo-small.png 2x"
              />
            </a>
          </div>
        </div>

        <div id="site-navigation-wrap" className="clr">
          <nav
            id="site-navigation"
            className="navigation main-navigation clr"
            itemScope="itemscope"
            itemType="https://schema.org/SiteNavigationElement"
            role="navigation"
          >
            <ul
              id="menu-main-nav-bar-menu"
              className="main-menu dropdown-menu sf-menu"
            >
              <li
                id="menu-item-293"
                className="last-to-falloff menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-191 current_page_item menu-item-293"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/"}
                  className="menu-link"
                >
                  <span className="text-wrap">HOME</span>
                </a>
              </li>

              <li
                id="menu-item-652"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-652 nav-no-click"
              >
                <a>
                  <span className="text-wrap">
                    FLAVORS
                    <i
                      className="nav-arrow fa fa-angle-down"
                      aria-hidden="true"
                      role="img"
                    ></i>
                  </span>
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-619"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-619"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/eliquid/size/100ml"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">E-LIQUID 100ml</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-2279"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2279"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/eliquid/size/60ml"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">E-LIQUID 60ml</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-655"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-655"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/salt/size/30ml"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">SALT 30ml</span>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li
                id="menu-item-4893"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-4893 nav-no-click"
              >
                <a>
                  <span className="text-wrap">
                    DISPOSABLES
                    <i
                      className="nav-arrow fa fa-angle-down"
                      aria-hidden="true"
                      role="img"
                    ></i>
                  </span>
                </a>
                <ul className="sub-menu">
                  {/* <li
                    id="menu-item-6022"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6022"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/disposable/brand/killer-disposables"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">Killer Disposables</span>
                    </a>
                  </li> 
                  <li
                    id="menu-item-6021"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6021"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/disposable/brand/hyve-disposables"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">
                        Vapetasia X Hyve Disposables
                      </span>
                    </a>
                  </li>
                  <li
                    id="menu-item-6021"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6021"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/disposable/brand/air-disposables"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">
                        Vapetasia X Air Disposables
                      </span>
                    </a>
                  </li>
                </ul>
              </li> */}

              <li
                id="menu-item-331"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-331"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/category/podpunch/size/30ml"}
                  className="menu-link"
                >
                  <span className="text-wrap">POD PUNCH</span>
                </a>
              </li>

              <li
                id="menu-item-292"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-292"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/advocacy/"}
                  className="menu-link"
                >
                  <span className="text-wrap">ADVOCACY</span>
                </a>
              </li>

              <li
                id="menu-item-292"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-292"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/vapetasia-pmta/"}
                  className="menu-link"
                >
                  <span className="text-wrap">PMTA</span>
                </a>
              </li>

              <li
                id="menu-item-3179"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3179"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/blog/"}
                  className="menu-link"
                >
                  <span className="text-wrap">BLOG</span>
                </a>
              </li>

              <li
                id="menu-item-331"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-331"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/about-us/"}
                  className="menu-link"
                >
                  <span className="text-wrap">ABOUT US</span>
                </a>
              </li>

              <li
                id="menu-item-336"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-336 nav-no-click"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/contact/"}
                  className="menu-link"
                >
                  <span className="text-wrap">
                    CONTACT US
                    <i
                      className="nav-arrow fa fa-angle-down"
                      aria-hidden="true"
                      role="img"
                    ></i>
                  </span>
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-1980"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1980"
                  >
                    <a
                      href={process.env.REACT_APP_BASE_URL + "/contact/"}
                      className="menu-link"
                    >
                      <span className="text-wrap">CONTACT</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-1978"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1978"
                  >
                    <a
                      href={process.env.REACT_APP_BASE_URL + "/media-request/"}
                      className="menu-link"
                    >
                      <span className="text-wrap">MEDIA REQUEST</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-2445"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2445"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL + "/promotional-request/"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">PROMOTIONAL REQUEST</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-2787"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2787"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/wholesale-registration/"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">WHOLESALE REGISTRATION</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-4966"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4966"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL + "/contact-support/"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">CONTACT SUPPORT</span>
                    </a>
                  </li>
                  {/* <li
                    id="menu-item-6121"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6121"
                  >
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/disposable/brand/disposables-support"
                      }
                      className="menu-link"
                    >
                      <span className="text-wrap">Disposable Support</span>
                    </a>
                  </li> */}
                </ul>
              </li>

              <li
                id="menu-item-2305"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2305"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/wholesale/"}
                  className="menu-link"
                >
                  <span className="text-wrap">WHOLESALE</span>
                </a>
              </li>

              <li
                id="menu-item-539"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-539"
              >
                <a
                  href={process.env.REACT_APP_BASE_URL + "/store-locator/"}
                  className="menu-link"
                >
                  <span className="text-wrap">STORE LOCATOR</span>
                </a>
              </li>

              {/* <li id="menu-item-3994" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3994">
              <a href={ process.env.REACT_APP_BASE_URL + '/pact/' } className="menu-link">
                <span className="text-wrap">
                  PACT
                </span>
              </a>
            </li> */}

              <li className="first-to-falloff search-toggle-li">
                {/*<a onClick={() => { return false }} className="site-search-toggle search-overlay-toggle fa fa-search" aria-label="Search website"></a>*/}
              </li>
            </ul>
          </nav>
        </div>

        <div
          id="mobile-menu-trigger"
          className="oceanwp-mobile-menu-icon clr mobile-right"
          onClick={() => toggleMenu()}
        >
          <a href="#" className="mobile-menu" aria-label="Mobile Menu">
            <div
              className="hamburger hamburger--squeeze"
              aria-expanded="false"
              role="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            <span className="oceanwp-text">Menu</span>
            <span className="oceanwp-close-text">Close</span>
          </a>
        </div>
      </div>

      <div id="mobile-dropdown" className="clr">
        <nav
          className="clr"
          itemScope="itemscope"
          itemType="https://schema.org/SiteNavigationElement"
        >
          <div id="mobile-nav" className="navigation clr">
            <ul id="menu-main-nav-bar-menu-1" className="menu">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-191 current_page_item menu-item-293">
                <a
                  href={process.env.REACT_APP_BASE_URL + "/"}
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-652">
                <a href="#flavors" onClick={(e) => toggleSub(e, "Flavor")}>
                  FLAVORS<span className="dropdown-toggle" tabIndex="0"></span>
                </a>
                <ul className={`${subMenuFlavor} sub-menu`}>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-619">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/eliquid/size/100ml"
                      }
                    >
                      E-LIQUID 100ml
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2279">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/eliquid/size/60ml"
                      }
                    >
                      E-LIQUID 60ml
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-655">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/salt/size/30ml"
                      }
                    >
                      SALT 30ml
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4893">
                <a href="#flavors" onClick={(e) => toggleSub(e, "Disposable")}>
                  DISPOSABLES
                  <span className="dropdown-toggle" tabIndex="0"></span>
                </a>
                <ul className={`${subMenuDisposable} sub-menu`}>
                  {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6022">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/disposable/brand/killer-disposables"
                      }
                    >
                      Killer Disposables
                    </a>
                  </li> */}
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6021">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/disposable/brand/hyve-disposables"
                      }
                    >
                      Vapetasia X Hyve Disposables
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6021">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/category/disposable/brand/air-disposables"
                      }
                    >
                      Vapetasia X Air Disposables
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-292">
                <a href={process.env.REACT_APP_BASE_URL + "/advocacy/"}>
                  ADVOCACY
                </a>
              </li>


              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-292">
                <a href={process.env.REACT_APP_BASE_URL + "/vapetasia-pmta/"}>
                  PMTA
                </a>
              </li>

              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3179">
                <a href={process.env.REACT_APP_BASE_URL + "/blog/"}>BLOG</a>
              </li>

              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-331">
                <a href={process.env.REACT_APP_BASE_URL + "/about-us/"}>
                  ABOUT US
                </a>
              </li>

              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-336">
                <a href="#flavors" onClick={(e) => toggleSub(e, "Contact")}>
                  CONTACT US
                  <span className="dropdown-toggle" tabIndex="0"></span>
                </a>
                <ul className={`${subMenuContact} sub-menu`}>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1980">
                    <a href={process.env.REACT_APP_BASE_URL + "/contact/"}>
                      CONTACT
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1978">
                    <a
                      href={process.env.REACT_APP_BASE_URL + "/media-request/"}
                    >
                      MEDIA REQUEST
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2445">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL + "/promotional-request/"
                      }
                    >
                      PROMOTIONAL REQUEST
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2787">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL +
                        "/wholesale-registration/"
                      }
                    >
                      WHOLESALE REGISTRATION
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4966">
                    <a
                      href={
                        process.env.REACT_APP_BASE_URL + "/contact-support/"
                      }
                    >
                      CONTACT SUPPORT
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2305">
                <a href={process.env.REACT_APP_BASE_URL + "/wholesale/"}>
                  WHOLESALE
                </a>
              </li>

              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-539">
                <a href={process.env.REACT_APP_BASE_URL + "/store-locator/"}>
                  STORE LOCATOR
                </a>
              </li>

              {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3994">
                <a href={ process.env.REACT_APP_BASE_URL + '/pact/' }>PACT</a>
              </li> */}
            </ul>
          </div>

          {/*<div id="mobile-menu-search" className="clr">
            <form aria-label="Search this website" method="get" action={ process.env.REACT_APP_BASE_URL + '/' } className="mobile-searchform" role="search"> 
              <input aria-label="Insert search query" value={searchVal} onChange={() => setSearchVal} className="field" id="ocean-mobile-search-1" type="search" name="s" autoComplete="off" placeholder="Search" /> 
              <button aria-label="Submit search" type="submit" className="searchform-submit"> 
                <i className=" icon-magnifier" aria-hidden="true" role="img"></i> 
              </button>
            </form>
          </div>*/}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
