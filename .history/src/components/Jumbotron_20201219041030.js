import React from 'react';
import './Jumbotron.scss';

export default function Jumbotron() {
    return (
      <>
        <div className="jumb-section">Jumbotron</div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          height="25px"
          viewBox="0 0 500 25"
          style="enable-background:new 0 0 500 25;"
          xml:space="preserve"
          preserveAspectRatio="none"
          class="mtn-curve__concave mtn-curve__curve-mobile"
        >
          <g class="mtn-svg-fill--white">
            <path d="M0,25h250C166.7,25,83.3,16.7,0,0V25z"></path>
            <path d="M250,25h250V0C416.7,16.7,333.3,25,250,25z"></path>
          </g>
        </svg>
      </>
    );
}
