import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="container-fluid" id="footer">
        <div className="footer-left">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </div>
        <div className="footer-center">
          <li>
            <a href="/">
              <i class="fa-solid fa-envelope"></i> contact@nirmalbank.com
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-solid fa-phone"></i> +91 5678456790
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-solid fa-location-pin"></i> Nandavan, Nagpur
            </a>
          </li>
        </div>
        <div className="footer-right">
          <li>
            <a href="/">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </div>
      </div>
      <div className="container-fluid" id="footer-bottom">
        <div className="footer">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              Copyright � 2023. All Rights Reserved. Created by Sarikal
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
