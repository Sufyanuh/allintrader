import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { GiTowTruck, GiWoodPile } from "react-icons/gi";
import { RiLandscapeLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { GoSkip } from "react-icons/go";
import { PiPaintBrushHousehold, PiToolboxBold } from "react-icons/pi";
import Data from "../json/data";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Filter data based on search term
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const results = Data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    console.log("Search term:", searchTerm);
    console.log("Search results:", searchResults);
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-right">
              <div>
                <Link to="#currency">GBP</Link>
              </div>
              {/* End of DropDown Menu */}
              <div className="dropdown">
                <Link to="#language">
                  <img
                    src="/assets/images/flags/eng.png"
                    alt="ENG Flag"
                    width={14}
                    height={8}
                    className="dropdown-image"
                  />{" "}
                  ENG
                </Link>
                <div className="dropdown-box">
                  <Link to="#ENG">
                    <img
                      src="/assets/images/flags/eng.png"
                      alt="ENG Flag"
                      width={14}
                      height={8}
                      className="dropdown-image"
                    />
                    ENG
                  </Link>
                  <Link to="#FRA">
                    <img
                      src="/assets/images/flags/fra.png"
                      alt="FRA Flag"
                      width={14}
                      height={8}
                      className="dropdown-image"
                    />
                    FRA
                  </Link>
                </div>
              </div>
              <span className="divider d-lg-show" />

              <Link to="/contact-us" className="d-lg-show">
                Contact Us
              </Link>
              <Link to="/about-us" className="d-lg-show">
                About Us
              </Link>
            </div>
          </div>
        </div>
        {/* End of Header Top */}
        <div className="header-middle">
          <div className="container">
            <div className="header-left mr-md-4">
              <Link
                href="#"
                className="mobile-menu-toggle  w-icon-hamburger"
                aria-label="menu-toggle"
              ></Link>
              <a href="/" className="logo ml-lg-0">
                <img
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={144}
                  height={45}
                />
              </a>
              <form
                onSubmit={handleSearchSubmit}
                method="get"
                action="#"
                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
              >
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  id="search"
                  placeholder="Search in..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  required=""
                />
                <button className="btn btn-search" type="submit">
                  <i className="w-icon-search" />
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                <div className="cart-overlay" />
                <Link to="#" className="cart-toggle label-down link">
                  <i className="w-icon-cart">
                    <span className="cart-count">2</span>
                  </i>
                  <span className="cart-label">Cart</span>
                </Link>
                <div className="dropdown-box">
                  <div className="cart-header">
                    <span>Shopping Cart</span>
                    <Link to="#" className="btn-close">
                      Close
                      <i className="w-icon-long-arrow-right" />
                    </Link>
                  </div>
                  <div className="products">
                    <div className="product product-cart">
                      <div className="product-detail">
                        <a href="/shop" className="product-name">
                          Beige knitted elas
                          <br />
                          tic runner shoes
                        </a>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$25.68</span>
                        </div>
                      </div>
                      <figure className="product-media">
                        <a href="/shop">
                          <img
                            src="/assets/images/cart/product-1.jpg"
                            alt="product"
                            height={84}
                            width={94}
                          />
                        </a>
                      </figure>
                      <button
                        className="btn btn-link btn-close"
                        aria-label="button"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    <div className="product product-cart">
                      <div className="product-detail">
                        <a href="/shop" className="product-name">
                          Blue utility pina
                          <br />
                          fore denim dress
                        </a>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$32.99</span>
                        </div>
                      </div>
                      <figure className="product-media">
                        <a href="/shop">
                          <img
                            src="/assets/images/cart/product-2.jpg"
                            alt="product"
                            width={84}
                            height={94}
                          />
                        </a>
                      </figure>
                      <button
                        className="btn btn-link btn-close"
                        aria-label="button"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="cart-total">
                    <label>Subtotal:</label>
                    <span className="price">$58.67</span>
                  </div>
                  <div className="cart-action">
                    <Link
                      to="#"
                      className="btn btn-dark btn-outline btn-rounded"
                    >
                      View Cart
                    </Link>
                    <Link to="#" className="btn btn-primary  btn-rounded">
                      Checkout
                    </Link>
                  </div>
                </div>
                {/* End of Dropdown Box */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {searchResults.map((item) => (
              <div className="shadow-lg card mb-1">
                <div
                  className="d-flex justify-content-evenly align-items-center"
                  key={item.id}
                >
                  <div>
                    <img
                      style={{ width: "100%" }}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of Header Middle */}
        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div
                  className="dropdown category-dropdown has-border"
                  // data-visible="true"
                >
                  <Link
                    href="#"
                    className="category-toggle text-dark"
                    role="button"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category" />
                    <span>Browse Categories</span>
                  </Link>
                  <div className="dropdown-box">
                    <ul className="menu category-menu vertical-menu">
                      {" "}
                      <li>
                        <a href="/shop/building-materials">
                          <i>
                            {" "}
                            <FaRegBuilding />
                          </i>
                          BUILDING MATERIALS
                        </a>
                      </li>
                      <li>
                        <a href="/shop/timber">
                          <i>
                            {" "}
                            <GiWoodPile />
                          </i>
                          TIMBER
                        </a>
                      </li>
                      <li>
                        <a href="/shop/landscaping">
                          <i>
                            <RiLandscapeLine />
                          </i>
                          LANDSCAPING
                        </a>
                      </li>
                      <li>
                        <a href="/shop/fixings-adhesives">
                          <i>
                            <VscTools />
                          </i>
                          FIXING & ADHESIVES
                        </a>
                      </li>
                      <li>
                        <a href="/shop/decorating">
                          <i>
                            <PiPaintBrushHousehold />
                          </i>
                          DECORATION
                        </a>
                      </li>
                      <li>
                        <a href="/shop/tools-and-safety-wear">
                          <i>
                            <PiToolboxBold />
                          </i>
                          TOOL & SAFETY WEAR
                        </a>
                      </li>
                      <li>
                        <a href="/shop/hire-services">
                          <i>
                            <GiTowTruck size={15} />
                          </i>
                          HIRE SERVICES
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <a href="/shop" className="d-xl-show">
                  <i className="w-icon-sale mr-1" />
                  Sales{" "}
                </a>
                <Link to="#">
                  <i>
                    <GoSkip fontSize={"2rem"} />
                  </i>
                  SKIP HIRE
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End of Header Bottom */}
      </header>

      <div className="container">
        <div
          className="swiper-container appear-animate icon-box-wrapper br-sm mt-6 mb-6"
          data-swiper-options="{
              'slidesPerView': 1,
              'loop': false,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 2
                  },
                  '768': {
                      'slidesPerView': 3
                  },
                  '1200': {
                      'slidesPerView': 4
                  }
              }
          }"
        >
          <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
            <div className="swiper-slide icon-box icon-box-side icon-box-primary">
              <span className="icon-box-icon icon-shipping">
                <i className="w-icon-truck" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title font-weight-bold mb-1">
                  Free Shipping &amp; Returns
                </h4>
                <p className="text-default">For all orders over $99</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side icon-box-primary">
              <span className="icon-box-icon icon-payment">
                <i className="w-icon-bag" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title font-weight-bold mb-1">
                  Secure Payment
                </h4>
                <p className="text-default">We ensure secure payment</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-money">
              <span className="icon-box-icon icon-money">
                <i className="w-icon-money" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title font-weight-bold mb-1">
                  Money Back Guarantee
                </h4>
                <p className="text-default">Any back within 30 days</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
              <span className="icon-box-icon icon-chat">
                <i className="w-icon-chat" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title font-weight-bold mb-1">
                  Customer Support
                </h4>
                <p className="text-default">Call or email us 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
