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
        
  
        </div>

        <img className="curved-svg-jumbotron" src={mtnCurve} alt="curve" />
      </>
    );
}
