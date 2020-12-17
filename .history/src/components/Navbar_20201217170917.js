import React from 'react';
import './Navbar.scss';
import logo from '../images/mtn-logo-nav.svg';


export default function Navbar() {
    return (
      <nav className="menu-bar">
         <ul className="menu-bar-first-list">
          <img src={logo} alt="mtn-logo" className="menu-bar-logo"/>
                <li className=""><a href=".">Personal <i class="fas fa-angle-down"></i></a>

                    <div className="sub-menu-1">
                        <ul>
                            
                        </ul>
                    </div>
                
                </li>
          <li><a href=".">Business</a></li>
          <li><a href=".">Investor <i class="fas fa-angle-down"></i></a></li>
          <li><a href=".">Foundation</a></li>
          <li><a href=".">Events</a></li> 
          <li><a href=".">Support <i class="fas fa-angle-down"></i></a></li>
          <li><a href=".">About Us</a></li>
          <li><a href=".">Careers</a></li>
          <li><a href=".">Contact Us <i class="fas fa-angle-down"></i></a></li>
                
                
        </ul>
            
        <ul className="menu-bar-second-list">
                <input type="search" placeholder="Search..." className="input-search"/>   
        </ul>
            
      </nav>
    );
}
