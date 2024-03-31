import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/layout";

const Products = () => {
  return (
    <Layout>
      <main className="main">
        {/* Start of Page Content */}
        <div className="page-content mb-10">
          <div className="container-fluid">
            {/* Start of Shop Content */}
            <div className="shop-content row gutter-lg">
              {/* Start of Sidebar, Shop Sidebar */}
              <aside className="sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper sidebar-fixed">
                {/* Start of Sidebar Overlay */}
                <div className="sidebar-overlay" />
                <Link className="sidebar-close" to="#">
                  <i className="close-icon" />
                </Link>
                {/* Start of Sidebar Content */}
                <div className="sidebar-content scrollable">
                  {/* Start of Sticky Sidebar */}
                  <div className="sticky-sidebar">
                    <div className="filter-actions">
                      <label>Filter :</label>
                      <Link
                        to="#"
                        className="btn btn-dark btn-link filter-clean"
                      >
                        Clean All
                      </Link>
                    </div>
                    {/* Start of Collapsible widget */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <label>All Categories</label>
                      </h3>
                      <ul className="widget-body filter-items search-ul">
                        <li>
                          <Link to="#">Accessories</Link>
                        </li>
                        <li>
                          <Link to="#">Babies</Link>
                        </li>
                        <li>
                          <Link to="#">Beauty</Link>
                        </li>
                        <li>
                          <Link to="#">Decoration</Link>
                        </li>
                        <li>
                          <Link to="#">Electronics</Link>
                        </li>
                        <li>
                          <Link to="#">Fashion</Link>
                        </li>
                        <li>
                          <Link to="#">Food</Link>
                        </li>
                        <li>
                          <Link to="#">Furniture</Link>
                        </li>
                        <li>
                          <Link to="#">Kitchen</Link>
                        </li>
                        <li>
                          <Link to="#">Medical</Link>
                        </li>
                        <li>
                          <Link to="#">Sports</Link>
                        </li>
                        <li>
                          <Link to="#">Watches</Link>
                        </li>
                      </ul>
                    </div>
                    {/* End of Collapsible Widget */}
                    {/* Start of Collapsible Widget */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <label>Price</label>
                      </h3>
                      <div className="widget-body">
                        <ul className="filter-items search-ul">
                          <li>
                            <Link to="#">$0.00 - $100.00</Link>
                          </li>
                          <li>
                            <Link to="#">$100.00 - $200.00</Link>
                          </li>
                          <li>
                            <Link to="#">$200.00 - $300.00</Link>
                          </li>
                          <li>
                            <Link to="#">$300.00 - $500.00</Link>
                          </li>
                          <li>
                            <Link to="#">$500.00+</Link>
                          </li>
                        </ul>
                        <form className="price-range">
                          <input
                            type="number"
                            name="min_price"
                            className="min_price text-center"
                            placeholder="$min"
                          />
                          <span className="delimiter">-</span>
                          <input
                            type="number"
                            name="max_price"
                            className="max_price text-center"
                            placeholder="$max"
                          />
                          <Link to="#" className="btn btn-primary btn-rounded">
                            Go
                          </Link>
                        </form>
                      </div>
                    </div>
                    {/* End of Collapsible Widget */}
                    {/* Start of Collapsible Widget */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <label>Size</label>
                      </h3>
                      <ul className="widget-body filter-items item-check mt-1">
                        <li>
                          <Link to="#">Extra Large</Link>
                        </li>
                        <li>
                          <Link to="#">Large</Link>
                        </li>
                        <li>
                          <Link to="#">Medium</Link>
                        </li>
                        <li>
                          <Link to="#">Small</Link>
                        </li>
                      </ul>
                    </div>
                    {/* End of Collapsible Widget */}
                    {/* Start of Collapsible Widget */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <label>Brand</label>
                      </h3>
                      <ul className="widget-body filter-items item-check mt-1">
                        <li>
                          <Link to="#">Elegant Auto Group</Link>
                        </li>
                        <li>
                          <Link to="#">Green Grass</Link>
                        </li>
                        <li>
                          <Link to="#">Node Js</Link>
                        </li>
                        <li>
                          <Link to="#">NS8</Link>
                        </li>
                        <li>
                          <Link to="#">Red</Link>
                        </li>
                        <li>
                          <Link to="#">Skysuite Tech</Link>
                        </li>
                        <li>
                          <Link to="#">Sterling</Link>
                        </li>
                      </ul>
                    </div>
                    {/* End of Collapsible Widget */}
                    {/* Start of Collapsible Widget */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <label>Color</label>
                      </h3>
                      <ul className="widget-body filter-items item-check">
                        <li>
                          <Link to="#">Black</Link>
                        </li>
                        <li>
                          <Link to="#">Blue</Link>
                        </li>
                        <li>
                          <Link to="#">Brown</Link>
                        </li>
                        <li>
                          <Link to="#">Green</Link>
                        </li>
                        <li>
                          <Link to="#">Grey</Link>
                        </li>
                        <li>
                          <Link to="#">Orange</Link>
                        </li>
                        <li>
                          <Link to="#">Yellow</Link>
                        </li>
                      </ul>
                    </div>
                    {/* End of Collapsible Widget */}
                  </div>
                  {/* End of Sidebar Content */}
                </div>
                {/* End of Sidebar Content */}
              </aside>
              {/* End of Shop Sidebar */}
              {/* Start of Shop Main Content */}
              <div className="main-content">
                <nav className="toolbox sticky-toolbox sticky-content fix-top">
                  <div className="toolbox-left">
                    <Link
                      to="#"
                      className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                  btn-icon-left d-block d-lg-none"
                    >
                      <i className="w-icon-category" />
                      <span>Filters</span>
                    </Link>
                  </div>
                </nav>
                <div className="product-wrapper row cols-xl-5 cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Electronics</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">3D Television</Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$220.00 - $230.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/2-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="/assets/images/shop/2-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-countdown-container">
                          <div
                            className="product-countdown countdown-compact"
                            data-until="2021, 9, 9"
                            data-format="DHMS"
                            data-compact="false"
                            data-labels-short="Days, Hours, Mins, Secs"
                          >
                            00:00:00:00
                          </div>
                        </div>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Electronics</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">
                            Alarm Clock With Lamp
                          </Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (10 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">$30.00</ins>
                            <del className="old-price">$60.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/3.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Electronics</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">Apple Laptop</Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (5 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$1,000.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/4.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Electronics</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">
                            Attachable Charge Alarm
                          </Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (7 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$15.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/5.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Fashion</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">Best Travel Bag</Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$83.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/6.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Sports</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">
                            Black Stunt Motor
                          </Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (12 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$374.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/7-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="/assets/images/shop/7-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Fashion</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">Blue Sky Trunk</Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (9 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$85.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/8.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Beauty</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">
                            Bodycare Smooth Powder
                          </Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$25.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/9.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Electronics</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">
                            Bright Green IPhone
                          </Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$950.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/10.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Fashion</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">
                            Cavin Fashion Suede Handbag
                          </Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$163.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/11-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="/assets/images/shop/11-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Electronics</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">
                            Charming Design Watch
                          </Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (10 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$30.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/12.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Fashion</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">
                            Classic Simple Backpack
                          </Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (9 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$85.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/13.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Watches</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">Smart Watch</Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (9 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$90.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/19-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="/assets/images/shop/19-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Accessories</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">Handmade Ring</Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (1 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$5.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/20.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Accessories</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">Pencil Case</Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$54.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/shop/18.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Medical</Link>
                        </div>
                        <h3 className="product-name">
                          <Link to="product-default.html">CT Marchine</Link>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$236.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/products/default/5.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Electronics</Link>
                        </div>
                        <h4 className="product-name">
                          <Link to="product-default.html">Drone</Link>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$632.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/products/default/6.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Electronics</Link>
                        </div>
                        <h4 className="product-name">
                          <Link to="product-default.html">Official Camera</Link>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">$263.00</ins>
                            <del className="old-price">$300.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/products/default/7-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="/assets/images/products/default/7-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Accessories</Link>
                        </div>
                        <h4 className="product-name">
                          <Link to="product-default.html">
                            Phone Charge Pad
                          </Link>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (8 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$23.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to="product-default.html">
                          <img
                            src="/assets/images/products/default/8.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </Link>
                        <div className="product-action-horizontal">
                          <Link
                            to="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          />
                          <Link
                            to="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <Link to="shop-banner-sidebar.html">Accessories</Link>
                        </div>
                        <h4 className="product-name">
                          <Link to="product-default.html">
                            Fashionalble Pencil
                          </Link>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link
                            to="product-default.html"
                            className="rating-reviews"
                          >
                            (9 reviews)
                          </Link>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$50.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Shop Main Content */}
              {/* Start of Sidebar, Right-sidebar */}
              <aside className="shop-sidebar right-sidebar sticky-sidebar-wrapper">
                <div className="sidebar-overlay" />
                <Link className="sidebar-close" to="#">
                  <i className="close-icon" />
                </Link>
                <Link to="#" className="sidebar-toggle">
                  <i className="fas fa-chevron-left" />
                </Link>
                <div className="sidebar-content">
                  <div className="widget widget-icon-box mb-6">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-truck" />
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">
                          Free Shipping &amp; Returns
                        </h4>
                        <p>For all orders over $99</p>
                      </div>
                    </div>
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-bag" />
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">Secure Payment</h4>
                        <p>We ensure secure payment</p>
                      </div>
                    </div>
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-money" />
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">Money Back Guarantee</h4>
                        <p>Any back within 30 days</p>
                      </div>
                    </div>
                  </div>
                  {/* End of Widget Icon Box */}
                  <div className="widget widget-banner mb-9">
                    <div className="banner banner-fixed br-sm">
                      <figure>
                        <img
                          src="/assets/images/shop/banner3.jpg"
                          alt="Banner"
                          width={266}
                          height={220}
                          style={{ backgroundColor: "#1D2D44" }}
                        />
                      </figure>
                      <div className="banner-content">
                        <div className="banner-price-info font-weight-bolder text-white lh-1">
                          40<sup className="font-weight-bold">%</sup>
                          <sub className="font-weight-bold text-uppercase">
                            Off
                          </sub>
                        </div>
                        <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                          Ultimate Sale
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* End of Widget Banner */}
                  <div className="widget widget-products">
                    <h4 className="title title-underline mb-2 font-weight-bold">
                      More Products
                    </h4>
                    <div
                      className="swiper-container swiper-theme nav-top"
                      data-swiper-options="{
                                  'nav': true,
                                  'dots': false,
                                  'slidesPerView': 1
                              }"
                    >
                      <div className="widget-col">
                        <div className="product product-widget">
                          <figure className="product-media">
                            <Link to="#">
                              <img
                                src="/assets/images/shop/13.jpg"
                                alt="Product"
                                width={100}
                                height={113}
                              />
                            </Link>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <Link to="#">Smart Watch</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$80.00-$90.00</div>
                          </div>
                        </div>
                        <div className="product product-widget">
                          <figure className="product-media">
                            <Link to="#">
                              <img
                                src="/assets/images/shop/14.jpg"
                                alt="Product"
                                width={100}
                                height={113}
                              />
                            </Link>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <Link to="#">Sky Medical Facility</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "80%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$58.00</div>
                          </div>
                        </div>
                        <div className="product product-widget">
                          <figure className="product-media">
                            <Link to="#">
                              <img
                                src="/assets/images/shop/15.jpg"
                                alt="Product"
                                width={100}
                                height={113}
                              />
                            </Link>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <Link to="#">Black Stunt Motor</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$374.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-col">
                        <div className="product product-widget">
                          <figure className="product-media">
                            <Link to="#">
                              <img
                                src="/assets/images/shop/16.jpg"
                                alt="Product"
                                width={100}
                                height={113}
                              />
                            </Link>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <Link to="#">Skate Pan</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$278.00</div>
                          </div>
                        </div>
                        <div className="product product-widget">
                          <figure className="product-media">
                            <Link to="#">
                              <img
                                src="/assets/images/shop/17.jpg"
                                alt="Product"
                                width={100}
                                height={113}
                              />
                            </Link>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <Link to="#">Modern Cooker</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "80%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$324.00</div>
                          </div>
                        </div>
                        <div className="product product-widget">
                          <figure className="product-media">
                            <Link to="#">
                              <img
                                src="/assets/images/shop/18.jpg"
                                alt="Product"
                                width={100}
                                height={113}
                              />
                            </Link>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <Link to="#">CT Machine</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$236.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            {/* End of Shop Content */}
          </div>
        </div>
        {/* End of Page Content */}
      </main>
    </Layout>
  );
};

export default Products;