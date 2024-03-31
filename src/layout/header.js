import React from "react";
import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { GiWoodPile } from "react-icons/gi";
import { RiLandscapeLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { GoSkip } from "react-icons/go";

const Header = () => {
  return (
    <>
      \
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-right">
              <div className="dropdown">
                <Link to="#currency">USD</Link>
                <div className="dropdown-box">
                  <Link to="#USD">USD</Link>
                  <Link to="#EUR">EUR</Link>
                </div>
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
              {/* End of Dropdown Menu */}
              <span className="divider d-lg-show" />
              {/* <Link to="blog.html" className="d-lg-show">
                Blog
              </Link> */}
              <Link to="#" className="d-lg-show">
                Contact Us
              </Link>
              <Link to="#" className="d-lg-show">
                My Account
              </Link>
              {/* <Link
                to="/assets/ajax/login.html"
                className="d-lg-show login sign-in"
              >
                <i className="w-icon-account" />
                Sign In
              </Link>
              <span className="delimiter d-lg-show">/</span>
              <a
                href="/assets/ajax/login.html"
                className="ml-0 d-lg-show login register"
              >
                Register
              </a> */}
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
                  required=""
                />
                <button className="btn btn-search" type="submit">
                  <i className="w-icon-search" />
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              {/* <a
                className="wishlist label-down link d-xs-show"
                href="wishlist.html"
              >
                <i className="w-icon-heart" />
                <span className="wishlist-label d-lg-show">Wishlist</span>
              </a> */}
              {/* <a
                className="compare label-down link d-xs-show"
                href="compare.html"
              >
                <i className="w-icon-compare" />
                <span className="compare-label d-lg-show">Compare</span>
              </a> */}
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
                    // data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="true"
                    // data-display="static"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category" />
                    <span>Browse Categories</span>
                  </Link>
                  <div className="dropdown-box">
                    <ul className="menu category-menu vertical-menu">
                      {" "}
                      <li>
                        <a href="/shop">
                          <i>
                            {" "}
                            <FaRegBuilding />
                          </i>
                          BUILDING MATERIALS
                        </a>
                        {/* <ul className="megamenu">
                                                <li>
                                                    <h4 className="menu-title">
                                                        BUILDING MATERIALS</h4>
                                                    <hr className="divider" />
                                                    <ul>
                                                        <li>
                                                            <a href="/shop">New Arrivals</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Best Sellers</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Trending</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Clothing</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Shoes</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Bags</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">
                                                                Jewlery &amp; Watches
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <h4 className="menu-title">TIMBER</h4>
                                                    <hr className="divider" />
                                                    <ul>
                                                        <li>
                                                            <a href="/shop">New Arrivals</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Best Sellers</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Trending</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Clothing</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Shoes</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Bags</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="/shop">
                                                                Jewlery &amp; Watches
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="banner-fixed menu-banner menu-banner2">
                                                        <figure>
                                                            <img
                                                                src="/assets/images/menu/banner-2.jpg"
                                                                alt="Menu Banner"
                                                                width={235}
                                                                height={347}
                                                            />
                                                        </figure>
                                                        <div className="banner-content">
                                                            <div className="banner-price-info mb-1 ls-normal">
                                                                Get up to
                                                                <strong className="text-primary text-uppercase">
                                                                    20%Off
                                                                </strong>
                                                            </div>
                                                            <h3 className="banner-title ls-normal">Hot Sales</h3>
                                                            <a
                                                                href="shop-banner-sidebar.html"
                                                                className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                                                            >
                                                                Shop Now
                                                                <i className="w-icon-long-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul> */}
                      </li>
                      <li>
                        <a href="/shop">
                          <i>
                            {" "}
                            <GiWoodPile />
                          </i>
                          TIMBER
                        </a>
                      </li>
                      <li>
                        <a href="/shop">
                          <i>
                            <RiLandscapeLine />
                          </i>
                          LANDSCAPING
                        </a>
                      </li>
                      <li>
                        <a href="/shop">
                          <i>
                            <VscTools />
                          </i>
                          FIXING & ADHESIVES
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <nav className="main-nav">
                                <ul className="menu active-underline">
                                    <li className="active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="">
                                        <Link to="/">Sales </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/">Skip Hire </Link>
                                    </li>
                                    <li>
                                        <Link to="shop-banner-sidebar.html">Shop</Link>
                                        <ul className="megamenu">
                                            <li>
                                                <h4 className="menu-title">Shop Pages</h4>
                                                <ul>
                                                    <li>
                                                        <Link to="shop-banner-sidebar.html">
                                                            Banner With Sidebar
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-boxed-banner.html">
                                                            Boxed Banner
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a href="/shop">
                                                            Full Width Banner
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-horizontal-filter.html">
                                                            Horizontal Filter
                                                            <span className="tip tip-hot">Hot</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-off-canvas.html">
                                                            Off Canvas Sidebar
                                                            <span className="tip tip-new">New</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-infinite-scroll.html">
                                                            Infinite Ajax Scroll
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-right-sidebar.html">
                                                            Right Sidebar
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-both-sidebar.html">
                                                            Both Sidebar
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Shop Layouts</h4>
                                                <ul>
                                                    <li>
                                                        <Link to="shop-grid-3cols.html">
                                                            3 Columns Mode
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-grid-4cols.html">
                                                            4 Columns Mode
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-grid-5cols.html">
                                                            5 Columns Mode
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-grid-6cols.html">
                                                            6 Columns Mode
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-grid-7cols.html">
                                                            7 Columns Mode
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-grid-8cols.html">
                                                            8 Columns Mode
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-list.html">List Mode</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="shop-list-sidebar.html">
                                                            List Mode With Sidebar
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Product Pages</h4>
                                                <ul>
                                                    <li>
                                                        <Link to="product-variable.html">
                                                            Variable Product
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-featured.html">
                                                            Featured &amp; Sale
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-accordion.html">
                                                            Data In Accordion
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-section.html">
                                                            Data In Sections
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-swatch.html">Image Swatch</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-extended.html">
                                                            Extended Info
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-without-sidebar.html">
                                                            Without Sidebar
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-video.html">
                                                            360<sup>o</sup> &amp; Video
                                                            <span className="tip tip-new">New</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Product Layouts</h4>
                                                <ul>
                                                    <li>
                                                        <a href="/shop">
                                                            Default<span className="tip tip-hot">Hot</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="product-vertical.html">
                                                            Vertical Thumbs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-grid.html">Grid Images</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-masonry.html">Masonry</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-gallery.html">Gallery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-sticky-info.html">
                                                            Sticky Info
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-sticky-thumb.html">
                                                            Sticky Thumbs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="product-sticky-both.html">
                                                            Sticky Both
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="vendor-dokan-store.html">Vendor</Link>
                                        <ul>
                                            <li>
                                                <Link to="vendor-dokan-store-list.html">
                                                    Store Listing
                                                </Link>
                                                <ul>
                                                    <li>
                                                        <Link to="vendor-dokan-store-list.html">
                                                            Store listing 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="vendor-wcfm-store-list.html">
                                                            Store listing 2
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="vendor-wcmp-store-list.html">
                                                            Store listing 3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="vendor-wc-store-list.html">
                                                            Store listing 4
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="vendor-dokan-store.html">Vendor Store</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="vendor-dokan-store.html">
                                                            Vendor Store 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="vendor-wcfm-store-product-grid.html">
                                                            Vendor Store 2
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="vendor-wcmp-store-product-grid.html">
                                                            Vendor Store 3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="vendor-wc-store-product-grid.html">
                                                            Vendor Store 4
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="blog.html">Blog</Link>
                                        <ul>
                                            <li>
                                                <Link to="blog.html">Classic</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-listing.html">Listing</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid-3cols.html">Grid</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="blog-grid-2cols.html">
                                                            Grid 2 columns
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-grid-3cols.html">
                                                            Grid 3 columns
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-grid-4cols.html">
                                                            Grid 4 columns
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-grid-sidebar.html">
                                                            Grid sidebar
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="blog-masonry-3cols.html">Masonry</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="blog-masonry-2cols.html">
                                                            Masonry 2 columns
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-masonry-3cols.html">
                                                            Masonry 3 columns
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-masonry-4cols.html">
                                                            Masonry 4 columns
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-masonry-sidebar.html">
                                                            Masonry sidebar
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="blog-mask-grid.html">Mask</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="blog-mask-grid.html">Blog mask grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-mask-masonry.html">
                                                            Blog mask masonry
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="post-single.html">Single Post</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="about-us.html">Pages</Link>
                                        <ul>
                                            <li>
                                                <Link to="about-us.html">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="become-a-vendor.html">Become A Vendor</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="faq.html">FAQs</Link>
                                            </li>
                                            <li>
                                                <Link to="error-404.html">Error 404</Link>
                                            </li>
                                            <li>
                                                <Link to="coming-soon.html">Coming Soon</Link>
                                            </li>
                                            <li>
                                                <Link to="wishlist.html">Wishlist</Link>
                                            </li>
                                            <li>
                                                <Link to="cart.html">Cart</Link>
                                            </li>
                                            <li>
                                                <Link to="checkout.html">Checkout</Link>
                                            </li>
                                            <li>
                                                <Link to="my-account.html">My Account</Link>
                                            </li>
                                            <li>
                                                <Link to="compare.html">Compare</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="elements.html">Elements</Link>
                                        <ul>
                                            <li>
                                                <Link to="element-accordions.html">Accordions</Link>
                                            </li>
                                            <li>
                                                <Link to="element-alerts.html">
                                                    Alert &amp; Notification
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="element-blog-posts.html">Blog Posts</Link>
                                            </li>
                                            <li>
                                                <Link to="element-buttons.html">Buttons</Link>
                                            </li>
                                            <li>
                                                <Link to="element-cta.html">Call to Action</Link>
                                            </li>
                                            <li>
                                                <Link to="element-icons.html">Icons</Link>
                                            </li>
                                            <li>
                                                <Link to="element-icon-boxes.html">Icon Boxes</Link>
                                            </li>
                                            <li>
                                                <Link to="element-instagrams.html">Instagrams</Link>
                                            </li>
                                            <li>
                                                <Link to="element-categories.html">
                                                    Product Category
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="element-products.html">Products</Link>
                                            </li>
                                            <li>
                                                <Link to="element-tabs.html">Tabs</Link>
                                            </li>
                                            <li>
                                                <Link to="element-testimonials.html">Testimonials</Link>
                                            </li>
                                            <li>
                                                <Link to="element-titles.html">Titles</Link>
                                            </li>
                                            <li>
                                                <Link to="element-typography.html">Typography</Link>
                                            </li>
                                            <li>
                                                <Link to="element-vendors.html">Vendors</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav> */}
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
