import React, {useState} from 'react';
import './MobileAccordions.scss';

export default function MobileAccordion() {
    const [personal, setPersonal] = useState(false)
    const [investors, setInvestors] = useState(false);

    

    const handleAccordionClick = () => {
        setPersonal(prevValue => !prevValue)
        setInvestors(prevValue => !prevValue)
    }

    
    return (
      <div>
        <div onClick={handleAccordionClick} class="accordion">
          Personal
        </div>
        <div className={personal ? `panel-show` : `panel-hide`}>
          <p>Services</p>
          <p>Data</p>
          <p>Devices</p>
          <p>Devices</p>
          <p>Devices</p>
        </div>

        <div class="accordion">Business</div>

        <div onClick={handleAccordionClick} class="accordion">
          Investors
        </div>
        <div className={show ? `panel-show` : `panel-hide`}>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
}
