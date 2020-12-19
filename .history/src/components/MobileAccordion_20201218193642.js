import React, {useState} from 'react';
import './MobileAccordions.scss';

export default function MobileAccordion() {
    const [show, setShow] = useState(false)


    const [navDetail, setNavDetail] = useState([

        {
            name: 'Personal',
            submenu: [
                {}
            ]

            
        }
        


    ])

    const handleAccordionClick = () => {
        setShow(prevValue => !prevValue)
    }

    
    return (
      <div>
        <div onClick={handleAccordionClick} class="accordion">
          Section 1
        </div>
        <div className={show ? `panel-show` : `panel-hide`}>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
        </div>

        <div onClick={handleAccordionClick} class="accordion">
          Section 2
        </div>
        <div className={show ? `panel-show` : `panel-hide`}>
          <p>Lorem ipsum...</p>
        </div>

        <div onClick={handleAccordionClick} class="accordion">
          Section 3
        </div>
        <div className={show ? `panel-show` : `panel-hide`}>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
}
