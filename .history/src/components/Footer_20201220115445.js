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
        <div className="row bg">
          <div className="col">col1</div>
          <div className="col">col1</div>
        </div>

        {/*  */}
      </div>
    );
}
