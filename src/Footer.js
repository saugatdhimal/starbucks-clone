import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Footer.css";

export default function Footer() {
  return (
      <>
    <div className="footer">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>About us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Our Heritage</Typography>
          <Typography>Our Coffee</Typography>
          <Typography>Stories and News</Typography>
          <Typography>Investor Relations</Typography>
          <Typography>Policies and Standards</Typography>
          <Typography>Customer Service</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Careers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Culture and Values</Typography>
          <Typography>Inclusion, Diversity, and Equity</Typography>
          <Typography>College Achievement</Typography>
          <Typography>U.S. Careers</Typography>
          <Typography>International Careers</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Social Impact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Ethical Sourcing</Typography>
          <Typography>Leading in Sustainability</Typography>
          <Typography>Strengthening Communities</Typography>
          <Typography>Global Social Impact Report</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>For Business Partners</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Landlord Support Center</Typography>
          <Typography>Suppliers</Typography>
          <Typography>Corporate Gift Card Sales</Typography>
          <Typography>Office and FoodService Coffee</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Orders and PickUp</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Order on the App</Typography>
          <Typography>Order on the Web</Typography>
          <Typography>Delivery</Typography>
          <Typography>Order and PickUp</Typography>
          <Typography>Explore and Find Coffee for Home</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <div className="footer__copyright">
        <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
    </div>
    </>
  );
}
