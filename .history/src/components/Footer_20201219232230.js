import React from 'react';
import './Footer.scss';
import SelectCountry from './SelectCountry';

export default function Footer() {
    return (
      <>
        <div className="footerr container">
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

          <div className="">
            <div className=" bg-success footer-logos">
              <div className="footer-logo-flex">
                <i class="fab fa-2x fa-facebook-f"></i>
                <i class="fab fa-2x fa-twitter"></i>
                <i class="fab fa-2x fa-linkedin-in"></i>
                <i class="fab fa-2x fa-instagram"></i>
                <i class="fab fa-2x fa-youtube"></i>
              </div>
              <div>
                <p>&copy; 2020 MTN Nigeria Communications PLC, All rights reserved.</p>
                <small>Privacy Policy & Data Protection</small>
              </div>
            </div>
            <div className=" bg-info">
                   <SelectCountry/>     
            </div>
          </div>
      </>
    );
}
