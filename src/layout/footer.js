import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        class="footer appear-animate"
        data-animation-options="{'name': 'fadeIn'}"
      >
        <div className="footer-newsletter bg-primary">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="icon-box icon-box-side text-white">
                  <div className="icon-box-icon d-inline-flex">
                    <i className="w-icon-envelop3" />
                  </div>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title text-white text-uppercase font-weight-bold">
                      Subscribe To Our Newsletter
                    </h4>
                    <p className="text-white">
                      Get all the latest information on Events, Sales and
                      Offers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                <form
                  action="#"
                  method="get"
                  className="input-wrapper input-wrapper-inline input-wrapper-rounded"
                >
                  <input
                    type="email"
                    className="form-control mr-2 bg-white"
                    name="email"
                    id="email"
                    placeholder="Your E-mail Address"
                  />
                  <button className="btn btn-dark btn-rounded" type="submit">
                    Subscribe
                    <i className="w-icon-long-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget-about">
                  <Link href="demo1.html" className="logo-footer">
                    <img
                      src="/assets/images/logo.png"
                      alt="logo-footer"
                      width={144}
                      height={45}
                    />
                  </Link>
                  <div className="widget-body">
                    <p className="widget-about-title">
                      Got Question? Mail us 24/7
                    </p>
                    <Link to="#" className="widget-about-call">
                      Accounts@all-in-trading.co.uk
                    </Link>
                    <Link to="#" className="widget-about-call">
                      Admin@all-in-trading.co.uk
                    </Link>
                    <Link to="#" className="widget-about-call">
                      Chris@all-in-trading.co.uk
                    </Link>
                    <p className="widget-about-desc">
                      Register now to get updates on pronot get up icons &amp;
                      coupons ster now toon.
                    </p>
                    <div className="social-icons social-icons-colored">
                      <Link
                        href="#"
                        className="social-icon social-facebook w-icon-facebook"
                      />
                      <Link
                        href="#"
                        className="social-icon social-twitter w-icon-twitter"
                      />
                      <Link
                        href="#"
                        className="social-icon social-instagram w-icon-instagram"
                      />
                      <Link
                        href="#"
                        className="social-icon social-youtube w-icon-youtube"
                      />
                      <Link
                        href="#"
                        className="social-icon social-pinterest w-icon-pinterest"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h3 className="widget-title">INFORMATION</h3>
                  <ul className="widget-body">
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">Contact us</Link>
                    </li>
                    <li>
                      <Link href="#">Easter Opening Hours</Link>
                    </li>
                    <li>
                      <Link href="#">Responsible Sourcing</Link>
                    </li>
                    <li>
                      <Link href="#">Rose Group</Link>
                    </li>
                    <li>
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Notice</Link>
                    </li>
                    <li>
                      <Link href="#">Cookies</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>
                  <ul className="widget-body">
                    <li>
                      <Link href="#">My account</Link>
                    </li>
                    <li>
                      <Link href="#">Addresses</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>
                  <ul className="widget-body">
                    <li>
                      <Link href="#">Shopping cart</Link>
                    </li>
                    <li>
                      <Link href="#">Branches</Link>
                    </li>
                    <li>
                      <Link href="#">Brick and Block Calculator</Link>
                    </li>
                    <li>
                      <Link href="#">Collection and Delivery FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-left">
              <p className="copyright">
                Copyright © 2021 All in Trade. All Rights Reserved.
              </p>
            </div>
            <div className="footer-right">
              <span className="payment-label mr-lg-8">
                We're using safe payment for
              </span>
              <figure className="payment">
                <img
                  src="/assets/images/payment.png"
                  alt="payment"
                  width={159}
                  height={25}
                />
              </figure>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
