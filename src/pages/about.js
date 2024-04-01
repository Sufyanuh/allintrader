import React from "react";
import Layout from "../layout/layout";

const About = () => {
  return (
    <Layout>
      <main className="main">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">About Us</h1>
          </div>
        </div>
        {/* End of Page Header */}
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav mb-10 pb-8">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of Page Content */}
        <div className="page-content">
          <div className="container">
            <section className="introduce mb-10 pb-10">
              <h2 className="title title-center">
                We’re Devoted Marketing
                <br />
                Consultants Helping Your Business Grow
              </h2>
              <p className=" mx-auto text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor labore et dolore magna aliqua. Venenatis tellu
                metus
              </p>
              <figure className="br-lg">
                <img
                  src="assets/images/pages/about_us/1.jpg"
                  alt="Banner"
                  width={1240}
                  height={540}
                  style={{ backgroundColor: "#D0C1AE" }}
                />
              </figure>
            </section>
            <section className="customer-service mb-7">
              <div className="row align-items-center">
                <div className="col-md-6 pr-lg-8 mb-8">
                  <h2 className="title text-left">
                    We Provide Continuous &amp; Kind Service for Customers
                  </h2>
                  <div className="accordion accordion-simple accordion-plus">
                    <div className="card border-no">
                      <div className="card-header">
                        <a href="#collapse3-1" className="collapse">
                          Customer Service
                        </a>
                      </div>
                      <div className="card-body expanded" id="collapse3-1">
                        <p className="mb-0">
                          Lorem ipsum dolor sit eiusamet, consectetur adipiscing
                          elit, sed do eius mod tempor incididunt ut labore et
                          dolore magna aliqua. Venenatis tell us in metus
                          vulputate eu scelerisque felis. Vel pretium vulp.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a href="#collapse3-2" className="expand">
                          Online Consultation
                        </a>
                      </div>
                      <div className="card-body collapsed" id="collapse3-2">
                        <p className="mb-0">
                          Lorem ipsum dolor sit eiusamet, consectetur adipiscing
                          elit, sed do eius mod tempor incididunt ut labore et
                          dolore magna aliqua. Venenatis tell us in metus
                          vulputate eu scelerisque felis. Vel pretium vulp.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a href="#collapse3-3" className="expand">
                          Sales Management
                        </a>
                      </div>
                      <div className="card-body collapsed" id="collapse3-3">
                        <p className="mb-0">
                          Lorem ipsum dolor sit eiusamet, consectetur adipiscing
                          elit, sed do eius mod tempor incididunt ut labore et
                          dolore magna aliqua. Venenatis tell us in metus
                          vulputate eu scelerisque felis. Vel pretium vulp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-8">
                  <figure className="br-lg">
                    <img
                      src="assets/images/pages/about_us/2.jpg"
                      alt="Banner"
                      width={610}
                      height={500}
                      style={{ backgroundColor: "#CECECC" }}
                    />
                  </figure>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
