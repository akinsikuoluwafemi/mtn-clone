import React from 'react';
import './Navbar.scss';
import logo from '../images/mtn-logo-nav.svg';


export default function Navbar() {
    return (
      <nav className="menu-bar">
        <div className="menu-bar-container">
          <ul className="menu-bar-container-first-list">
            <img src={logo} alt="mtn-logo" className="menu-bar-container-logo" />
            <li className="personal-menu">
              <a className="menu-bar-container-link" href=".">
                Personal <i class="fas fa-angle-down"></i>
              </a>

              <div className="sub-menu-1">
                <ul className="sub-menu-1-container">
                  <li className="services-menu sub-menu-1-container-list">
                    <a  href=".">Services </a> <i class="fas fa-angle-right"></i>

                        <div className="sub-menu-5">
                            <ul className="sub-menu-5-container">
                            <li className="services-menu sub-menu-5-container-list">
                                <a href=".">Tariff Plans </a> 
                            </li>
                            <li>
                                <a href=".">Roaming</a> 
                            </li>
                            <li>
                                <a href=".">International Rates</a> 
                            </li>
                            <li>
                                <a href=".">Country Code Prefix</a>
                            </li>
                            <li>
                                <a href=".">Recharge</a> 
                            </li>
                            <li>
                                <a href=".">Sim Services</a> 
                            </li>
                            </ul>
                        </div>
           
                                    
                  </li>
                  <li className="data-menu">
                        <a href=".">Data</a> <i class="fas fa-angle-right"></i>

                        <div className="sub-menu-6">
                            <ul className="sub-menu-5-container">
                            <li className="services-menu sub-menu-5-container-list">
                                <a href=".">Data Plans </a> 
                            </li>
                            <li>
                                <a href=".">Social Media Bundles</a> 
                            </li>
                            <li>
                                <a href=".">Video Streaming Pack</a> 
                            </li>
                            <li>
                                <a href=".">Data Gifting</a>
                            </li>
                            </ul>
                        </div>         

                  </li>
                  <li className="devices-menu">
                        <a href=".">Devices</a> <i class="fas fa-angle-right"></i>

                        
                        <div className="sub-menu-7">
                            <ul className="sub-menu-5-container">
                            <li className="services-menu sub-menu-5-container-list">
                                <a href=".">Device Financing </a> 
                            </li>
                            <li>
                                <a href=".">4G MIFI</a> 
                            </li>
                            <li>
                                <a href=".">Smart Feature Phone</a> 
                            </li>
                           
                            </ul>
                        </div>      
                        
                  </li>
                  <li className="started-menu">
                    <a href=".">Getting Started</a>
                        <i class="fas fa-angle-right"></i>
                                    

                        <div className="sub-menu-8">
                            <ul className="sub-menu-5-container">
                            <li className="services-menu sub-menu-5-container-list">
                                <a href=".">Coverage Map </a> 
                            </li>
                            <li>
                                <a href="."></a> 
                            </li>
                            <li>
                                <a href=".">Smart Feature Phone</a> 
                            </li>
                           
                            </ul>
                        </div>      


                  </li>
                  <li>
                    <a href=".">myMTN App</a>
                  </li>
                </ul>
              </div>
           
            </li>
            <li>
              <a  className="menu-bar-container-link" href=".">Business</a>
            </li>
            <li className="investor-menu">
              <a className="menu-bar-container-link" href=".">
                Investor <i class="fas fa-angle-down"></i>
              </a>
                        
                <div className="sub-menu-2">
                    <ul className="sub-menu-1-container">
                    <li className="sub-menu-1-container-list">
                        <a  href=".">More Investors </a> <i class="fas fa-angle-right"></i>
                    </li>
                    <li>
                        <a href=".">Shareholders</a> <i class="fas fa-angle-right"></i>
                    </li>
                    <li>
                        <a href=".">Financial Reporting</a> <i class="fas fa-angle-right"></i>
                    </li>
                    <li>
                        <a href=".">Announcements</a>{" "}
                        <i class="fas fa-angle-right"></i>
                    </li>
                    
                    </ul>
              </div>        

            </li>
            <li >
              <a className="menu-bar-container-link" href=".">Foundation</a>
            </li>
            <li>
              <a className="menu-bar-container-link" href=".">Events</a>
            </li>
            <li className="support-menu">
              <a className="menu-bar-container-link" href=".">
                Support <i class="fas fa-angle-down"></i>
             </a>
                        
                <div className="sub-menu-3">
                    <ul className="sub-menu-1-container">
                    <li className="sub-menu-1-container-list">
                        <a  href=".">Help Center </a> <i class="fas fa-angle-right"></i>
                    </li>
                    <li>
                        <a href=".">Community</a> <i class="fas fa-angle-right"></i>
                    </li>
                    
                    </ul>
              </div> 
            </li>
            <li>
              <a className="menu-bar-container-link" href=".">About Us</a>
            </li>
            <li>
              <a className="menu-bar-container-link" href=".">Careers</a>
            </li>
            <li className="contactus-menu">
              <a className="menu-bar-container-link" href=".">
                Contact Us <i class="fas fa-angle-down"></i>
            </a>
                        

                <div className="sub-menu-4">
                    <ul className="sub-menu-1-container">
                    <li className="sub-menu-1-container-list">
                        <a  href=".">Mtn Supplier </a> <i class="fas fa-angle-right"></i>
                    </li>
                  
                    
                    </ul>
              </div> 
                        

            </li>
          </ul>

          <ul className="menu-bar-container-second-list text-center">
            <input
              type="search"
              placeholder="Search..."
              className="input-search"
            />
          </ul>
        </div>
      </nav>
    );
}
