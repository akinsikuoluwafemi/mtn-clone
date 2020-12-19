import React from 'react';
import './Jumbotron.scss';
import mtnCurve from '../images/concave-mtn-curve.svg';

export default function Jumbotron() {
    return (
        <>
            <div className="jumb-section">
                Jumbotron
            </div>
            <img style={{width: 100vw'}} src={ mtnCurve} alt="curve"/>
            
            
        </>
    )
}
