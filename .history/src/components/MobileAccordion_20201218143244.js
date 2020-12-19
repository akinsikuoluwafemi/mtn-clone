import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './MobileAccordions.scss';

export default function MobileAccordion() {
    return (
      <div>
        <Accordion class="accordionn">
          <AccordionSummary
            className="summary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="summary-text">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordionn">
          <AccordionSummary
            className="summary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography cla>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}
