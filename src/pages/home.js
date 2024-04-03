/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Layout from "../layout/layout";
import { IoIosStar } from "react-icons/io";

const Home = () => {
  return (
    <Layout>
      <main className="main">
        <div className="container">
          <div className="row category-banner-wrapper appear-animate pt-6 pb-8">
            <div className="col-md-6 mb-4">
              <div className="banner banner-fixed br-xs">
                <figure>
                  <img
                    src="/assets/images/demos/demo1/categories/1-1.jpg"
                    alt="Category Banner"
                    width={610}
                    height={160}
                  />
                </figure>
                {/* <div className="banner-content y-50 mt-0">
                                    <h5 className="banner-subtitle font-weight-normal text-dark">
                                        Get up to{" "}
                                        <span className="text-secondary font-weight-bolder text-uppercase ls-25">
                                            20% Off
                                        </span>
                                    </h5>
                                    <h3 className="banner-title text-uppercase">
                                        Sports Outfits
                                        <br />
                                        <span className="font-weight-normal                       text-capitalize">
                                            Collection
                                        </span>
                                    </h3>
                                    <div className="banner-price-info font-weight-normal">
                                        Starting at{" "}
                                        <span className="text-secondary                       font-weight-bolder">
                                            $170.00
                                        </span>
                                    </div>
                                </div> */}
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="banner banner-fixed br-xs">
                <figure>
                  <img
                    src="/assets/images/demos/demo1/categories/1-2.jpg"
                    alt="Category Banner"
                    width={610}
                    height={160}
                  />
                </figure>
                {/* <div className="banner-content y-50 mt-0">
                                    <h5 className="banner-subtitle font-weight-normal text-capitalize">
                                        New Arrivals
                                    </h5>
                                    <h3 className="banner-title text-white text-uppercase">
                                        Accessories
                                        <br />
                                        <span className="font-weight-normal text-capitalize">
                                            Collection
                                        </span>
                                    </h3>
                                    <div className="banner-price-info text-white font-weight-normal text-capitalize">
                                        Only From
                                        <span className="text-secondary font-weight-bolder">$90.00</span>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
          <div
            className="banner banner-fashion appear-animate br-sm mb-9"
            style={{
              backgroundImage: "url(/assets/images/demos/demo1/banners/4.jpg)",
              //   backgroundColor: "#383839",
              width: "100%",
              aspectRatio: "7 / 1.1",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* End of Deals Wrapper */}
        </div>
        <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
          <div className="container pb-2">
            <h2 className="title justify-content-center pt-1 ls-normal mb-5">
              Top Categories Of The Month
            </h2>

            <div className=" row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
              <div className=" category category-classic category-absolute overlay-zoom br-xs">
                <a href="/shop/building-materials" className="category-media">
                  <img
                    src="/assets/images/demos/demo1/categories/2-1.jpg"
                    style={{ width: 250, height: 250 }}
                    alt="Category"
                    width={130}
                    height={130}
                  />
                </a>
                <div className="category-content">
                  <h4 className="category-name text-white">
                    BUILDING MATERIALS
                  </h4>
                  <a
                    href="/shop/building-materials"
                    className="btn btn-primary btn-link btn-underline text-white"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className=" category category-classic category-absolute overlay-zoom br-xs">
                <a href="/shop/timber" className="category-media">
                  <img
                    src="/assets/images/demos/demo1/categories/2-2.jpg"
                    style={{ width: 250, height: 250 }}
                    alt="Category"
                    width={130}
                    height={130}
                  />
                </a>
                <div className="category-content">
                  <h4 className="category-name text-white">TIMBER</h4>
                  <a
                    href="/shop/timber"
                    className="btn btn-primary btn-link btn-underline text-white"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className=" category category-classic category-absolute overlay-zoom br-xs">
                <a href="/shop/landscaping" className="category-media">
                  <img
                    src="/assets/images/demos/demo1/categories/2-3.jpg"
                    style={{ width: 250, height: 250 }}
                    alt="Category"
                    width={130}
                    height={130}
                  />
                </a>
                <div className="category-content">
                  <h4 className="category-name text-white">LANDSCAPING</h4>
                  <a
                    href="/shop/landscaping"
                    className="btn btn-primary btn-link btn-underline text-white"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className=" category category-classic category-absolute overlay-zoom br-xs">
                <a href="/shop/fixings-adhesives" className="category-media">
                  <img
                    src="/assets/images/demos/demo1/categories/2-4.jpg"
                    style={{ width: 250, height: 250 }}
                    alt="Category"
                    width={130}
                    height={130}
                  />
                </a>
                <div className="category-content">
                  <h4 className="category-name text-white">
                    FIXING & ADHESIVES
                  </h4>
                  <a
                    href="/shop/fixings-adhesives"
                    className="btn btn-primary btn-link btn-underline text-white"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className=" category category-classic category-absolute overlay-zoom br-xs">
                <a href="/shop/decorating" className="category-media">
                  <img
                    src="/assets/images/demos/demo1/categories/2-5.jpg"
                    style={{ width: 250, height: 250 }}
                    alt="Category"
                    width={130}
                    height={130}
                  />
                </a>
                <div className="category-content">
                  <h4 className="category-name text-white">DECORATION</h4>
                  <a
                    href="/shop/decorating"
                    className="btn btn-primary btn-link btn-underline text-white"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className=" category category-classic category-absolute overlay-zoom br-xs mb-3">
                <a href="/shop/tools-and-safety-wear" className="category-media">
                  <img
                    src="/assets/images/demos/demo1/categories/2-6.jpg"
                    style={{ width: 250, height: 250 }}
                    alt="Category"
                    width={130}
                    height={130}
                  />
                </a>
                <div className="category-content">
                  <h4 className="category-name text-white">
                    TOOLS AND SAFETY WEAR
                  </h4>
                  <a
                    href="/shop/tools-and-safety-wear"
                    className="btn btn-primary btn-link btn-underline text-white"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className=" category category-classic category-absolute overlay-zoom br-xs">
                <a href="/shop/hire-services" className="category-media">
                  <img
                    src="/assets/images/demos/demo1/categories/2-7.jpg"
                    style={{ width: 250, height: 250 }}
                    alt="Category"
                    width={130}
                    height={130}
                  />
                </a>
                <div className="category-content">
                  <h4 className="category-name text-black">HIRE SERVICES</h4>
                  <a
                    href="/shop/hire-services"
                    className="btn btn-primary btn-link btn-underline text-black"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-5">
          <h2 className="title title-underline mb-4 ls-normal appear-animate">
            Our Clients
          </h2>
          <div
            className="swiper-container swiper-theme brands-wrapper mb-9 appear-animate"
            data-swiper-options="{
              'spaceBetween': 0,
              'slidesPerView': 2,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 4
                  },
                  '992': {
                      'slidesPerView': 5
                  },
                  '1200': {
                      'slidesPerView': 6
                  }
              }
          }"
          >
            <div className="swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
              <div className="swiper-slide brand-col">
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/1.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/2.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
              </div>
              <div className="swiper-slide brand-col">
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/3.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/4.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
              </div>
              <div className="swiper-slide brand-col">
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/5.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/6.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
              </div>
              <div className="swiper-slide brand-col">
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/7.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/8.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
              </div>
              <div className="swiper-slide brand-col">
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/9.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/10.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
              </div>
              <div className="swiper-slide brand-col">
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/11.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
                <figure className="brand-wrapper">
                  <img
                    src="/assets/images/demos/demo1/brands/12.png"
                    alt="Brand"
                    width={410}
                    height={186}
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="post-wrapper appear-animate mb-4">
            {/* <div className="title-link-wrapper pb-1 mb-4">
              <h2 className="title ls-normal mb-0">From Our Blog</h2>
              <a
                href="blog-listing.html"
                className="font-weight-bold font-size-normal"
              >
                View All Articles
              </a>
            </div> */}
            <h2
              className="ls-normal mb-0"
              style={{ textAlign: "center", padding: "20px" }}
            >
              Customers Reviews
            </h2>
            <div className="swiper">
              <div
                className="swiper-container swiper-theme"
                data-swiper-options="{
                      'slidesPerView': 1,
                      'spaceBetween': 20,
                      'breakpoints': {
                          '576': {
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
                <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                  <div className="swiper-slide post text-center overlay-zoom">
                    {/* <figure className="post-media br-sm">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo1/blogs/1.jpg"
                          alt="Post"
                          width={280}
                          height={180}
                          style={{ backgroundColor: "#4b6e91" }}
                        />
                      </a>
                    </figure> */}
                    <div
                      className="post-details Details-cards"
                      style={{ textAlign: "left" }}
                    >
                      <div className="post-meta">
                        {/* by{" "} */}
                        <a href="#" className="post-author text-left">
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </a>
                        {/* -{" "} */}
                        {/* <a href="#" className="post-date mr-0">
                          03.05.2021
                        </a> */}
                      </div>
                      <h4 className="post-title" style={{ textAlign: "left" }}>
                        <a href="#">
                          <p style={{ fontSize: "12px" }}>
                            "They have all you need here and are very Well
                            organised. Also the staff and management are all
                            nice and always willing to help 👌 5*"
                          </p>
                        </a>
                      </h4>
                      <a
                        href="#"
                        className="btn btn-link btn-dark btn-underline"
                      >
                        -Shaun
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide post text-center overlay-zoom">
                    {/* <figure className="post-media br-sm">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo1/blogs/2.jpg"
                          alt="Post"
                          width={280}
                          height={180}
                          style={{ backgroundColor: "#cec9cf" }}
                        />
                      </a>
                    </figure> */}
                    <div
                      className="post-details Details-cards"
                      style={{ textAlign: "left" }}
                    >
                      <div className="post-meta">
                        {/* by{" "} */}
                        <a href="#" className="post-author text-left">
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </a>
                        {/* -{" "} */}
                        {/* <a href="#" className="post-date mr-0">
                          03.05.2021
                        </a> */}
                      </div>
                      <h4 className="post-title" style={{ textAlign: "left" }}>
                        <a href="#">
                          <p style={{ fontSize: "12px" }}>
                            "Highly recommended. Staff is friendly and helpful.
                            Very passionate team. Can go to the limits to
                            accommodate customer"
                          </p>
                        </a>
                      </h4>
                      <a
                        href="#"
                        className="btn btn-link btn-dark btn-underline"
                      >
                        -Ali
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide post text-center overlay-zoom">
                    {/* <figure className="post-media br-sm">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo1/blogs/3.jpg"
                          alt="Post"
                          width={280}
                          height={180}
                          style={{ backgroundColor: "#c9c7bb" }}
                        />
                      </a>
                    </figure> */}
                    <div
                      className="post-details Details-cards"
                      style={{ textAlign: "left" }}
                    >
                      <div className="post-meta">
                        {/* by{" "} */}
                        <a href="#" className="post-author text-left">
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </a>
                        {/* -{" "} */}
                        {/* <a href="#" className="post-date mr-0">
                          03.05.2021
                        </a> */}
                      </div>
                      <h4 className="post-title" style={{ textAlign: "left" }}>
                        <a href="#">
                          <p style={{ fontSize: "12px" }}>
                            "Great service, excellent product range and very
                            helpful staff! Why go anywhere else?"
                          </p>
                        </a>
                      </h4>
                      <a
                        href="#"
                        className="btn btn-link btn-dark btn-underline"
                      >
                        - AJR
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide post text-center overlay-zoom">
                    {/* <figure className="post-media br-sm">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo1/blogs/4.jpg"
                          alt="Post"
                          width={280}
                          height={180}
                          style={{ backgroundColor: "#d8dce0" }}
                        />
                      </a>
                    </figure> */}
                    <div
                      className="post-details Details-cards"
                      style={{ textAlign: "left" }}
                    >
                      <div className="post-meta">
                        {/* by{" "} */}
                        <a href="#" className="post-author text-left">
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </a>
                        {/* -{" "} */}
                        {/* <a href="#" className="post-date mr-0">
                          03.05.2021
                        </a> */}
                      </div>
                      <h4 className="post-title" style={{ textAlign: "left" }}>
                        <a href="#">
                          <p style={{ fontSize: "12px" }}>
                            "Ordered over the phone arrived exactly when they
                            said lovely young lady driver who put the good
                            exactly where I asked. Good prices based on this
                            transaction would highly recommend"
                          </p>
                        </a>
                      </h4>
                      <a
                        href="#"
                        className="btn btn-link btn-dark btn-underline"
                      >
                        - B Q
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide post text-center overlay-zoom">
                    {/* <figure className="post-media br-sm">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo1/blogs/4.jpg"
                          alt="Post"
                          width={280}
                          height={180}
                          style={{ backgroundColor: "#d8dce0" }}
                        />
                      </a>
                    </figure> */}
                    <div
                      className="post-details Details-cards"
                      style={{ textAlign: "left" }}
                    >
                      <div className="post-meta">
                        {/* by{" "} */}
                        <a href="#" className="post-author text-left">
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </a>
                        {/* -{" "} */}
                        {/* <a href="#" className="post-date mr-0">
                          03.05.2021
                        </a> */}
                      </div>
                      <h4 className="post-title" style={{ textAlign: "left" }}>
                        <a href="#">
                          <p style={{ fontSize: "12px" }}>
                            "Great service, great price, fast delivery - why
                            would you go to a big name store when these guys win
                            on every category?"
                          </p>
                        </a>
                      </h4>
                      <a
                        href="#"
                        className="btn btn-link btn-dark btn-underline"
                      >
                        - Jon
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide post text-center overlay-zoom">
                    {/* <figure className="post-media br-sm">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo1/blogs/4.jpg"
                          alt="Post"
                          width={280}
                          height={180}
                          style={{ backgroundColor: "#d8dce0" }}
                        />
                      </a>
                    </figure> */}
                    <div
                      className="post-details Details-cards"
                      style={{ textAlign: "left" }}
                    >
                      <div className="post-meta">
                        {/* by{" "} */}
                        <a href="#" className="post-author text-left">
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                        </a>
                        {/* -{" "} */}
                        {/* <a href="#" className="post-date mr-0">
                          03.05.2021
                        </a> */}
                      </div>
                      <h4 className="post-title" style={{ textAlign: "left" }}>
                        <a href="#">
                          <p style={{ fontSize: "12px" }}>
                            "Excellent service each time we use Rose Building
                            Supplies - that’s why we are returning customers!
                            Customer service is outstanding. Really quick
                            delivery. Cannot fault this business, great range of
                            products, reasonable prices!"
                          </p>
                        </a>
                      </h4>
                      <a
                        href="#"
                        className="btn btn-link btn-dark btn-underline"
                      >
                        - AnnaLisa
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row category-banner-wrapper appear-animate pt-6 pb-8">
            <div
              className="col-md-6 mb-4"
              style={{
                paddingLeft: "0px",
                paddingRight: "0px",
                backgroundColor: "#001c51",
              }}
            >
              <div className="banner">
                <div className="banner-content">
                  <h5 className="banner-subtitle font-weight-normal text-dark bannersubtitle1">
                    All in Trading
                    <p
                      className="font-weight-normal text-capitalize"
                      style={{ fontSize: "5rem" }}
                    >
                      Our story
                    </p>
                  </h5>
                  <div
                    className="banner-price-info font-weight-normal price-info1"
                    style={{ padding: "20px" }}
                  >
                    A friendly, independent family owned business offering
                    competitively priced quality materials and personal service,
                    all delivered by our unrivalled team of experts. Our
                    branches operate in{" "}
                    <strong>Peterborough, Huntingdon </strong>and{" "}
                    <strong>Corby</strong> and stock a vast range of building
                    materials and supplies: from bulk products like sand and
                    decorative aggregates, blocks, bricks and lintels, tools /
                    safety wear to landscaping products. We supply both to the
                    trade and public and are always happy to provide
                    knowledgeable advice on any building matter – it’s this
                    individual and personal service that makes us different.
                  </div>
                  <div className="bannerBtn1">
                    <button className="btn btn-light btn-rounded" type="button">
                      Find out more about us
                    </button>
                    <button className="btn btn-light btn-rounded" type="button">
                      Where do we deliver to ?
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 mb-4"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <div className="banner banner-fixed">
                <figure>
                  <img
                    src="/assets/images/demos/demo1/categories\2-2.jpg"
                    alt="Category Banner"
                    // width={610}
                    // height={160}
                    className="categories\2-2"
                  />
                </figure>
                {/* <div className="banner-content y-50 mt-0">
                                    <h5 className="banner-subtitle font-weight-normal text-capitalize">
                                        New Arrivals
                                    </h5>
                                    <h3 className="banner-title text-white text-uppercase">
                                        Accessories
                                        <br />
                                        <span className="font-weight-normal text-capitalize">
                                            Collection
                                        </span>
                                    </h3>
                                    <div className="banner-price-info text-white font-weight-normal text-capitalize">
                                        Only From
                                        <span className="text-secondary font-weight-bolder">$90.00</span>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
