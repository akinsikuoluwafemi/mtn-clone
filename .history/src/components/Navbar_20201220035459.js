import React, { useState,useContext } from 'react';
import './Navbar.scss';
import logo from '../images/mtn-logo-nav.svg';
import MobileAccordion from './MobileAccordion';
import {PhotosContext, LoadingContext, ModalContext} from '../ContextFile';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Navbar() {
   

  

  let [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  let {photos, setPhotos} = useContext(PhotosContext);
  let { loading, setLoading } = useContext(LoadingContext);
  let { showModal, setShowModal } = useContext(ModalContext);
  console.log(photos)


    const handleNavbar = () => {
        setMenuOpen(prevValue => !prevValue)

    }
  
  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(query.length < 3) {
      alert('query must be a word')
    }else {
      searchPhotos();
      
    }
  }


  const searchPhotos = () => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
      headers: {
        Authorization: `Client-ID fbd3e9a832c5ab83514cd8b1d2a013db17c7348fc9b1495329da828508e4475c`,
      },
    })
      .then((data) => data.json())
      .then((response) => {
        setLoading(true)
        setShowModal(true);
        console.log(response.results);

        setPhotos(response.results);
        alert('show modal')
        setLoading(false);

        setQuery('')
      }).catch(error => {
        alert('an error occured')
      })
  }

    

    return (
      <>
        <nav className="menu-bar">
          <div className="menu-bar-container">
            <ul className="menu-bar-container-first-list">
              <img
                src={logo}
                alt="mtn-logo"
                className="menu-bar-container-logo"
              />
              <li className="personal-menu">
                <a className="menu-bar-container-link" href=".">
                  Personal <i class="fas fa-angle-down"></i>
                </a>

                <div className="sub-menu-1">
                  <ul className="sub-menu-1-container">
                    <li className="services-menu sub-menu-1-container-list">
                      <a href=".">Services </a>{" "}
                      <i class="fas fa-angle-right"></i>
                      <div className="sub-menu-5">
                        <ul className="sub-menu-1-container">
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
                        <ul className="sub-menu-1-container">
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
                        <ul className="sub-menu-1-container">
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
                        <ul className="sub-menu-1-container">
                          <li className="services-menu sub-menu-5-container-list">
                            <a href=".">Coverage Map </a>
                          </li>
                          <li>
                            <a href=".">Find a Share</a>
                          </li>
                          <li>
                            <a href=".">How-to guides</a>
                          </li>

                          <li>
                            <a href=".">Internet Settings</a>
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
                <a className="menu-bar-container-link" href=".">
                  Business
                </a>
              </li>
              <li className="investor-menu">
                <a className="menu-bar-container-link" href=".">
                  Investor <i class="fas fa-angle-down"></i>
                </a>

                <div className="sub-menu-2">
                  <ul className="sub-menu-1-container">
                    <li className="sub-menu-1-container-list">
                      <a href=".">More Investors </a>
                    </li>
                    <li>
                      <a href=".">Shareholders</a>
                    </li>
                    <li>
                      <a href=".">Financial Reporting</a>
                    </li>
                    <li>
                      <a href=".">Announcements</a>{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="menu-bar-container-link" href=".">
                  Foundation
                </a>
              </li>
              <li>
                <a className="menu-bar-container-link" href=".">
                  Events
                </a>
              </li>
              <li className="support-menu">
                <a className="menu-bar-container-link" href=".">
                  Support <i class="fas fa-angle-down"></i>
                </a>

                <div className="sub-menu-3">
                  <ul className="sub-menu-1-container">
                    <li className="sub-menu-1-container-list">
                      <a href=".">Help Center </a>
                    </li>
                    <li>
                      <a href=".">Community</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="menu-bar-container-link" href=".">
                  About Us
                </a>
              </li>
              <li>
                <a className="menu-bar-container-link" href=".">
                  Careers
                </a>
              </li>
              <li className="contactus-menu">
                <a className="menu-bar-container-link" href=".">
                  Contact Us <i class="fas fa-angle-down"></i>
                </a>

                <div className="sub-menu-4">
                  <ul className="sub-menu-1-container">
                    <li className="sub-menu-1-container-list">
                      <a href=".">Mtn Supplier </a>{" "}
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <form
              onSubmit={handleSubmit}
              className="search-container menu-bar-container-second-list text-center"
            >
              {/* <i class="fas fa-search search-icon"></i> */}
              <input
                type="search"
                placeholder="Search..."
                className="input-search"
                value={query}
                onChange={handleQuery}
              />
            </form>
            <CircularProgress/>
          </div>
        </nav>

        <nav className="mobile-menu-bar">
          <div className="mobile-menu-header">
            <img
              src={logo}
              alt="mtn-logo"
              className="menu-bar-container-logo"
            />
            {/* <span id="metaMenu">&#9776;</span> */}
            <div
              onClick={handleNavbar}
              className={menuOpen ? `menu-btn open` : `menu-btn`}
            >
              <div className="menu-btn__burger"></div>
            </div>
          </div>

          <div
            className={
              menuOpen
                ? `mobile-menu-bar-content show-content`
                : `mobile-menu-bar-content remove-content`
            }
          >
            <div className={menuOpen ? `show` : `not-show`}>
              <MobileAccordion />
            </div>
          </div>
        </nav>
      </>
    );
}
