import React from "react";
import Layout from "../layout/layout";

const Contact = () => {
  return (
    <Layout>
      <main className="main">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">Contact Us</h1>
          </div>
        </div>
        {/* End of Page Header */}
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav mb-10 pb-1">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of PageContent */}
        <div className="page-content contact-us">
          <div className="container">
            <section className="content-title-section mb-10">
              <h3 className="title title-center mb-3">Contact Information</h3>
              {/* <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p> */}
            </section>
            {/* End of Contact Title Section */}
            <section className="contact-information-section mb-10"> 
              <div
                className=" swiper-container swiper-theme "
                data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 1,
                      'breakpoints': {
                          '480': {
                              'slidesPerView': 2
                          },
                          '768': {
                              'slidesPerView': 3
                          },
                          '992': {
                              'slidesPerView': 4
                          }
                      }
                  }"
              >
                <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1 d-flex justify-content-center ">
                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-email">
                      <i className="w-icon-envelop-closed" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">E-mail Address</h4>
                      <p>
                        {/* <a
                          href="https://portotheme.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="5538343c3915302d34382539307b363a38"
                        >
                          [email&nbsp;protected]
                        </a> */}
                         Chris@all-in-trading.co.uk
                      </p>
                    </div>
                  </div>
                  {/* <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-headphone">
                      <i className="w-icon-headphone" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Phone Number</h4>
                      <p>(123) 456-7890 / (123) 456-9870</p>
                    </div>
                  </div> */}
                  {/* <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-map-marker">
                      <i className="w-icon-map-marker" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Address</h4>
                      <p>Lawrence, NY 11345, USA</p>
                    </div>
                  </div>
                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-fax">
                      <i className="w-icon-fax" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Fax</h4>
                      <p>1-800-570-7777</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>
            {/* End of Contact Information section */}
            <hr className="divider mb-10 pb-1" />
            <section className="contact-section">
              <div className="row gutter-lg pb-3">
                {/* <div className="col-lg-6 mb-8">
                  <h4 className="title mb-3">People usually ask these</h4>
                  <div className="accordion accordion-bg accordion-gutter-md accordion-border">
                    <div className="card">
                      <div className="card-header">
                        <a href="#collapse1" className="collapse">
                          How can I cancel my order?
                        </a>
                      </div>
                      <div id="collapse1" className="card-body expanded">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod temp orincid idunt ut labore et
                          dolore magna aliqua. Venenatis tellus in metus vulp
                          utate eu sceler isque felis. Vel pretium.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a href="#collapse2" className="expand">
                          Why is my registration delayed?
                        </a>
                      </div>
                      <div id="collapse2" className="card-body collapsed">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod temp orincid idunt ut labore et
                          dolore magna aliqua. Venenatis tellus in metus vulp
                          utate eu sceler isque felis. Vel pretium.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a href="#collapse3" className="expand">
                          What do I need to buy products?
                        </a>
                      </div>
                      <div id="collapse3" className="card-body collapsed">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod temp orincid idunt ut labore et
                          dolore magna aliqua. Venenatis tellus in metus vulp
                          utate eu sceler isque felis. Vel pretium.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a href="#collapse4" className="expand">
                          How can I track an order?
                        </a>
                      </div>
                      <div id="collapse4" className="card-body collapsed">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod temp orincid idunt ut labore et
                          dolore magna aliqua. Venenatis tellus in metus vulp
                          utate eu sceler isque felis. Vel pretium.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a href="#collapse5" className="expand">
                          How can I get money back?
                        </a>
                      </div>
                      <div id="collapse5" className="card-body collapsed">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod temp orincid idunt ut labore et
                          dolore magna aliqua. Venenatis tellus in metus vulp
                          utate eu sceler isque felis. Vel pretium.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6 mb-4">
              <div className="banner banner-fixed br-xs">
                <figure>
                  <img
                    src="/assets/images/demos/demo1/categories\2-6.jpg"
                    alt="Category Banner"
                    width={610}
                    height={100}
                    id="bannerContact1"
                  />
                </figure>
              </div>
            </div>
                <div className="col-lg-6 mb-8">
                  <h4 className="title mb-3">Send Us a Message</h4>
                  <form
                    className="form contact-us-form"
                    action="#"
                    method="post"
                  >
                    <div className="form-group">
                      <label htmlFor="username">Your Name</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email_1">Your Email</label>
                      <input
                        type="email"
                        id="email_1"
                        name="email_1"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        cols={30}
                        rows={5}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="btn btn-dark btn-rounded">
                      Send Now
                    </button>
                  </form>
                </div>
              </div>
            </section>
            {/* End of Contact Section */}
          </div>
          {/* Google Maps - Go to the bottom of the page to change settings and map location. */}
          {/* <div className="google-map contact-google-map" id="googlemaps" /> */}
          {/* End Map Section */}
        </div>
        {/* End of PageContent */}
      </main>
    </Layout>
  );
};

export default Contact;
