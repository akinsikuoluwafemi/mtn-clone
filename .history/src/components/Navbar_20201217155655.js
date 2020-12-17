import React from 'react';
import './Navbar.scss';

export default function Navbar() {
    return (
      <nav className="menu-bar">
         <ul className="menu-bar-first-list">
                
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
            
        {/* <ul>
             <input type="search"/>   
        </ul> */}
            
      </nav>
    );
}
