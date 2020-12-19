import React from 'react';
import './Jumbotron.scss';
import mtnCurve from '../images/concave-mtn-curve.svg';

export default function Jumbotron() {
    return (
      <>
        <div className="jumb-section">
          Jumbotron
          <img className="" src={mtnCurve} alt="curve" />
        </div>
      </>
    );
}
