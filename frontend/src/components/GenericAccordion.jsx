import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";

const GenericAccordion = ({ title, body, detailsStyle = "", ...props }) => {
  return (
    <Accordion>
      <AccordionSummary {...props}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={detailsStyle}>{body}</AccordionDetails>
    </Accordion>
  );
};

export default GenericAccordion;
