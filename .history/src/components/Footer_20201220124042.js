import React from 'react';
import './Footer.scss';
import SelectCountry from './SelectCountry';
import MobileAccordion from "./MobileAccordion";




export default function Footer() {
    return (
      <div className="container footerr-wrapper ">
        <div className="footerr bg-success">
          <div class="footerr-item footerr-item-item-1">
            <a href=".">Personal</a>
            <div className="footerr-item-info">
              <a href=".">Services</a>
              <a href=".">Data</a>
              <a href=".">Devices</a>
              <a href=".">Getting Started</a>
              <a href=".">myMTN App</a>
            </div>
          </div>
          <div class="footerr-item footerr-item-item-2">
            <a href=".">Business</a>
          </div>
          <div class="footerr-item footerr-item-item-3">
            <a href=".">Investors</a>
            <div className="footerr-item-info">
              <a href=".">More Investors</a>
              <a href=".">Shareholders</a>
              <a href=".">Financial Reporting</a>
              <a href=".">Announcements</a>
            </div>
          </div>
          <div class="footerr-item footerr-item-item-4">
            <a href=".">Foundation</a>
          </div>
          <div class="footerr-item footerr-item-item-5">
            <a href=".">Events</a>
          </div>
          <div class="footerr-item footerr-item-item-6">
            <a href=".">Support</a>
            <div className="footerr-item-info">
              <a href=".">Help Center</a>
              <a href=".">Community</a>
            </div>
          </div>
          <div class="footerr-item footerr-item-item-7">
            <a href=".">About Us</a>
          </div>
          <div class="footerr-item footerr-item-item-8">
            <a href=".">Careers</a>
          </div>
          <div class="footerr-item footerr-item-item-9">
            <a href=".">Contact Us</a>
            <div className="footerr-item-info">
              <a href=".">MTN Supplier</a>
            </div>
          </div>
        </div>
        <div className="mobile-footer">
          <MobileAccordion />
        </div>

        {/*  */}
        <div className="row footer-bottom ">
          <div className="col-md-6 col-lg-4  bg-info">
            <div className="icons">
              <span>
                <i class="fab fa-3x fa-facebook-f"></i>
              </span>
              <span>
                <i class="fab fa-3x fa-twitter"></i>
              </span>
              <span>
                <i class="fab fa-3x fa-linkedin-in"></i>
              </span>
              <span>
                <i class="fab fa-3x fa-youtube"></i>
              </span>
              <span>
                <i class="fab fa-3x fa-instagram"></i>
              </span>
              <span></span>
            </div>
            <p className="text-white h5">
              &nbsp; 2020 MTN Nigeria Communications PLC, All rights reserved.{" "}
            </p>
            <p className="text-white h6">Privacy Policy & Data Protection</p>
          </div>
          <div className="col-md-6 col-lg-4  bg-danger"><cOUNTRU</div>
        </div>

        {/*  */}
      </div>
    );
}
