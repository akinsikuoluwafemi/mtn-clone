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
          <a href=".">Devices</a>
          <a href=".">Getting Started</a>
          <a href=".">myMTN App</a>
        </div>

        <div class="accordion">
          <a href="." className="accordion-summary">Business</a>
        </div>

        <div onClick={handleInvestorsChange} class="accordion">
          <a href="." className="accordion-summary">Investors</a>
          {investors ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={investors ? `panel-show` : `panel-hide`}>
          <a href="." >More Investors</a>
          <a href="." >Shareholders</a>
          <a href="." >Financial Reporting</a>
          <a href="." >Announcements</a>
        </div>

        <div class="accordion"><a href="." className="accordion-summary" >Foundation</a></div>
        <div class="accordion"> <a href="." className="accordion-summary">Events</a></div>

        <div onClick={handleSupportChange} class="accordion">
          <a href="." className="accordion-summary">Support</a>
          {support ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={support ? `panel-show` : `panel-hide`}>
          <a href=".">Help Center</a>
          <a href=".">Community</a>
        </div>

        <div class="accordion"><a href="." className="accordion-summary">About Us</a></div>
        <div class="accordion"><a href="." className="accordion-summary">Careers</a></div>
        <div onClick={handleContactChange} class="accordion">
          <span><a href="." className="accordion-summary">Contact Us</a></span>
          {contact ? (
            <RemoveIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </div>
        <div className={contact ? `panel-show` : `panel-hide`}>
          <a href=".">MTN Supplier</a>
        </div>
        <div>
            < 
                
                
        </div>
      </div>
    );
}
