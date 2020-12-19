import React from 'react';
import './MobileAccordions.scss';

export default function MobileAccordion() {
    
    const handleAccordionClick = () => {
        alert('clicked')
    }

    
    return (
      <div>
        < onClick={handleAccordionClick} class="accordion">Section 1</>
        <div style={{display: 'block'}} class="panel ">
          <p>Lorem ipsum...</p>
        </div>

        < onClick={handleAccordionClick} class="accordion">Section 2</>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        < onClick={handleAccordionClick} class="accordion">Section 3</>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
}
