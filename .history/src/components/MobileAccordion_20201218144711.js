import React from 'react';
import './MobileAccordions.scss';

export default function MobileAccordion() {
    
    const handleAccordionClick = () => {
        
    }

    
    return (
      <div>
        <button onClick={handleAccordionClick} class="accordion">Section 1</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Section 2</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Section 3</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
}
