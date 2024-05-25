import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";

const GenericAccordion = ({ title, body, ...props }) => {
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        {...props}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{body}</AccordionDetails>
    </Accordion>
  );
};

export default GenericAccordion;
