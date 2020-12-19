import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
      <div className="footerr container">
        <div class="footerr-item footerr-item-item-1">
          <p>Personal</p>
          <div className="footerr-item-info">
            <p>Services</p>
            <p>Data</p>
            <p>Devices</p>
            <p>Getting Started</p>
            <p>myMTN App</p>
          </div>
        </div>
        <div class="footerr-item footerr-item-item-2">
          <p>Business</p>
        </div>
        <div class="footerr-item footerr-item-item-3">
          <a href=".">Investors</a>
          <div className="footerr-item-info">
            <a href=".">More Investors</a >
            <a href=".">Shareholders</a >
            <a href=".">Financial Reporting</a>
            <a href=".">Announcements</a >
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
            <a href="">Community</p>
          </div>
        </div>
        <div class="footerr-item footerr-item-item-7">
          <p>About Us</p>
        </div>
        <div class="footerr-item footerr-item-item-8">
          <p>Careers</p>
        </div>
        <div class="footerr-item footerr-item-item-9">
          <p>Contact Us</p>
          <div className="footerr-item-info">
            <p>MTN Supplier</p>
          </div>
        </div>
      </div>
    );
}