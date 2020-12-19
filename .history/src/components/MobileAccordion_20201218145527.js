import React from 'react';
import './MobileAccordions.scss';

export default function MobileAccordion() {
    
    const handleAccordionClick = () => {
        alert('clicked')
    }

    
    return (
      <div>
        <span onClick={handleAccordionClick} class="accordion">Section 1</span>
        <div style={{display: 'block'}} class="panel ">
          <p>Lorem ipsum...</p>
        </div>

        <span onClick={handleAccordionClick} class="accordion">Section 2</span>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <span onClick={handleAccordionClick} class="accordion">Section 3</span>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
}
