import React from 'react';
import './Navbar.scss';
import logo from '../images/mtn-logo-nav.svg';


export default function Navbar() {
    return (
      <nav className="menu-bar">
         <ul className="menu-bar-first-list">
          <img src={ logo} alt="mtn-logo" className="menu-bar-logo"/>
          <li className="">Personal <i class="fas fa-angle-down"></i></li>
          <li>Business</li>
          <li>Investor <i class="fas fa-angle-down"></i></li>
          <li>Foundation</li>
          <li>Events</li>
          <li>Support <i class="fas fa-angle-down"></i></li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us <i class="fas fa-angle-down"></i></li>
                
                
        </ul>
            
        <ul className="menu-bar-second-list">
                {/* <input type="search"/>    */}
                left
        </ul>
            
      </nav>
    );
}
