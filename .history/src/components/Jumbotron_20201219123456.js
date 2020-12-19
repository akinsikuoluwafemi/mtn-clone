import React from 'react';
import './Jumbotron.scss';
import mtnCurve from '../images/concave-mtn-curve.svg';

export default function Jumbotron() {
    return (
      <>
        {/* <div className="jumb-section">
                Jumbotron
            </div> */}
        <div className="curved">
          <a href="." className="curved-back-btn">
            <i class="fas fa-angle-left "></i>
            <span className="px-3">Back</span>
          </a>
          <div className="container jumbotron-center">
            <div class="jumbotron-center-content">
              <div className=" jumbotron-center-content text-white">
                <p
                  style={{
                    fontWeight: "500",
                    color: "#fff",
                    fontSize: "2.5rem",
                  }}
                >
                  Contact
                </p>

                <p className="header-text">Mtn Suppliers</p>
              </div>
            </div>
          </div>
        </div>

        <img className="curved-svg-jumbotron" src={mtnCurve} alt="curve" />
      </>
    );
}
