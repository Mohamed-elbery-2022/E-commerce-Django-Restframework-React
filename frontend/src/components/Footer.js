import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// get our fontawesome import
function Footer() {
    return (
       
      <footer className="footer-area footer--light">
  <div className="footer-big">
    {/* <!-- start .container --> */}
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="footer-widget">
            <div className="widget-about">
              <img src="http://placehold.it/250x80" alt="" className="img-fluid"/>
              <h1 className='text-dark'>Alpha Store</h1>
              <p>Welcome To alphaStore for sell all products and find </p>
              <ul className="contact-details">
                <li>
                  <span className="icon-earphones"></span> Call Us:
                  <Link to="tel:01000778877">01000778877</Link>
                </li>
                <li>
                  <span className="icon-envelope-open"></span>
                  <Link to="mailto:Alphashop@alphaStore.com">Alphashop@alphaStore.com</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-md-4 --> */}
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu footer-menu--1">
              <h4 className="footer-widget-title text-dark">Popular Category</h4>
              <ul>
                <li>
                  <Link to="/fashion">Fashion</Link>
                </li>
                <li>
                  <Link to="/electronuc">Electronics</Link>
                </li>
                <li>
                  <Link to="/computing">Mobiles phones</Link>
                </li>
                <li>
                  <Link to="#">Computer Screens</Link>
                </li>
                <li>
                  <Link to="#"></Link>
                </li>
              </ul>
            </div>
            {/* <!-- end /.footظer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-md-3 --> */}

        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu">
              <h4 className="footer-widget-title text-dark">Our Company</h4>
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact US</Link>
                </li>
                <li>
                  <Link to="#">Affiliates</Link>
                </li>
                <li>
                  <Link to="#">Testimonials</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Plan &amp; Pricing</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-lg-3 --> */}

        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu no-padding">
              <h4 className="footer-widget-title text-dark">Help Support</h4>
              <ul>
                <li>
                  <Link to="#">Support Forum</Link>
                </li>
                <li>
                  <Link to="#">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="#">Support Policy</Link>
                </li>
                <li>
                  <Link to="#">Refund Policy</Link>
                </li>
                <li>
                  <Link to="#">FAQs</Link>
                </li>
                <li>
                  <Link to="#">Buyers Faq</Link>
                </li>
                <li>
                  <Link to="#">Sellers Faq</Link>
                </li>
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- Ends: .col-lg-3 --> */}

      </div>
      {/* <!-- end /.row --> */}
    </div>
    {/* <!-- end /.container --> */}
  </div>
  {/* <!-- end /.footer-big --> */}

  <div className="mini-footer bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright-text">
            <p>© 2022
              <Link to="/">AlphaStore</Link>. All rights reserved. Created by
              <Link to="#">AlphaStore Team</Link>
            </p>
          </div>
{/* 
          <div className="go_top">
            <span className="icon-arrow-up"></span>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</footer>
       
    )
}

export default Footer
