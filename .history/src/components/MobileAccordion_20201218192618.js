import React, {useState} from 'react';
import './MobileAccordions.scss';

export default function MobileAccordion() {
    const []
    const handleAccordionClick = () => {
        alert('clicked')
    }

    
    return (
      <div>
        <div onClick={handleAccordionClick} class="accordion">
          Section 1
        </div>
        <div  class="panel-hide ">
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
        </div>

        <div onClick={handleAccordionClick} class="accordion">
          Section 2
        </div>
        <div class="panel-hide">
          <p>Lorem ipsum...</p>
        </div>

        <div onClick={handleAccordionClick} class="accordion">
          Section 3
        </div>
        <div class="panel-hide">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
}