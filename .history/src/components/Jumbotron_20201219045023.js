import React from 'react';
import './Jumbotron.scss';
import mtnCurve from '../images/concave-mtn-curve.svg';

export default function Jumbotron() {
    return (
      <>
        {/* <div className="jumb-section">
                Jumbotron
            </div> */}
        <div className="curved"></div>
            
        <img style={{ width: "100vw" }} className="curved-svg-jum" src={mtnCurve} alt="curve" />
      </>
    );
}
