import React, {useState} from 'react';
import './MobileAccordions.scss';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


export default function MobileAccordion() {
    const [personal, setPersonal] = useState(false)
    const [investors, setInvestors] = useState(false);
    const [support, setSupport] = useState(false);
    const [contact, setContact] = useState(false);
    

    const handlePersonalChange = () => {
        setPersonal(prevValue => !prevValue)
    }

    const handleInvestorsChange = () => {
        setInvestors((prevValue) => !prevValue);
        
    }

    const handleSupportChange = () => {
        setSupport(prevValue => !prevValue)
    }

    const handleContactChange = () => {
        setContact(prevValue=> !prevValue)
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
        <div className={personal ? `panel-show panel` : `panel-hide panel`}>
          <span>Services</span>
          <span>Data</span>
          <span>Devices</span>
          <span>Getting Started</span>
          <span>myMTN App</span>
        </div>

        <div class="accordion">
          <span className="accordion-summary">Business</span>
        </div>

        <div onClick={handleInvestorsChange} class="accordion">
          <span className="accordion-summary">Investors</span>
          {investors ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={investors ? `panel-show` : `panel-hide`}>
          <span>More Investors</span>
          <span>Shareholders</span>
          <p>Financial Reporting</p>
          <p>Announcements</p>
        </div>

        <div class="accordion"><span className="accordion-summary" >Foundation</span></div>
        <div class="accordion"> <span className="accordion-summary">Events</span></div>

        <div onClick={handleSupportChange} class="accordion">
          <span>Support</span>
          {support ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={support ? `panel-show` : `panel-hide`}>
          <p>Help Center</p>
          <p>Community</p>
        </div>

        <div class="accordion">About Us</div>
        <div class="accordion">Careers</div>
        <div onClick={handleContactChange} class="accordion">
          <span>Contact Us</span>
          {contact ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={contact ? `panel-show` : `panel-hide`}>
          <p>MTN Supplier</p>
        </div>
      </div>
    );
}
