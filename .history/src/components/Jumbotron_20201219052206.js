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
                
            <div className="container">
                    
            </div>
          <a href="." className="curved-back-btn">
                <i class="fas fa-angle-left"></i>
                <span className="px-3">Back</span>
            </a>
  
        </div>

        <img className="curved-svg-jumbotron" src={mtnCurve} alt="curve" />
      </>
    );
}
