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
                <div class="container-jumbotron-center-content">
                        <div className=" text-white h4">
                            <p style={{fontWeight: 'bold', color: '#fff', fontSize: '3rem'}}>Contact</p>
                            <h1>Mtn Suppliers</h1>

                    </div>
                </div>
          </div>
        </div>

        <img className="curved-svg-jumbotron" src={mtnCurve} alt="curve" />
      </>
    );
}
