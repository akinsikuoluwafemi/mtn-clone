import React, {useState} from 'react';
import './MobileAccordions.scss';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


export default function MobileAccordion() {
    const [personal, setPersonal] = useState(false)
    const [investors, setInvestors] = useState(false);
    const [support, setSupport] = useState(false);

    

    const handlePersonalChange = () => {
        setPersonal(prevValue => !prevValue)
    }

    const handleInvestorsChange = () => {
        setInvestors((prevValue) => !prevValue);
        
    }

    const handleSupportChange = () => {
        setSupport(prevValue => !prevValue)
    }


    
    return (
      <div>
        <div onClick={handlePersonalChange} class="accordion">
          <span className="accordion-summary">Personal</span>
          {personal ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={personal ? `panel-show` : `panel-hide`}>
          <p>Services</p>
          <p>Data</p>
          <p>Devices</p>
          <p>Getting Started</p>
          <p>myMTN App</p>
        </div>

        <div class="accordion">Business</div>

        <div onClick={handleInvestorsChange} class="accordion">
          <span>Investors</span>
          {investors ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={investors ? `panel-show` : `panel-hide`}>
          <p>More Investors</p>
          <p>Shareholders</p>
          <p>Financial Reporting</p>
          <p>Announcements</p>
        </div>

        <div class="accordion">Foundation</div>
        <div class="accordion">Events</div>

        <div onClick={handleInvestorsChange} class="accordion">
          <span>Support</span>
          {support ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={investors ? `panel-show` : `panel-hide`}>
          <p>More Investors</p>
          <p>Shareholders</p>
          <p>Financial Reporting</p>
          <p>Announcements</p>
        </div>
      </div>
    );
}
