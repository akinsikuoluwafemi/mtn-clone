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
          <a href="." className="accordion-summary">Personal</a>
          {personal ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={personal ? `panel-show` : `panel-hide`}>
          <a href=".">Services</a>
          <a href=".">Data</a>
          <p>Devices</p>
          <p>Getting Started</p>
          <p>myMTN App</p>
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
          <p>More Investors</p>
          <p>Shareholders</p>
          <p>Financial Reporting</p>
          <p>Announcements</p>
        </div>

        <div class="accordion"><span className="accordion-summary" >Foundation</span></div>
        <div class="accordion"> <span className="accordion-summary">Events</span></div>

        <div onClick={handleSupportChange} class="accordion">
          <span className="accordion-summary">Support</span>
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

        <div class="accordion"><span className="accordion-summary">About Us</span></div>
        <div class="accordion"><span className="accordion-summary">Careers</span></div>
        <div onClick={handleContactChange} class="accordion">
          <span><span className="accordion-summary">Contact Us</span></span>
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
