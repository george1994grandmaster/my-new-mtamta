import {FC} from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {accordion} from "../utils/data";
import Collapse from "@mui/material/Collapse";
import {accordionMainTitle} from "../utils/data";

const AccordionComponent: FC = () => {

  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const handleAccordionChange = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion-background-slice p-relative">
        <div className="main-title-content">
          {accordionMainTitle.map((el, index) => (
          <h1 key={index} className="light fw-strong title">
            <span className="dark">{el.title.charAt(0)}</span>
            {el.title.substring(1)}
          </h1>
        ))}
        </div>
        <div className="container">
          <div className="accordion-content">
            {accordion.map((el, index) => (
              <Accordion key={index} expanded={expandedIndexes.includes(index)} onChange={() => handleAccordionChange(index)}>
                <AccordionSummary aria-controls={`panel-content-${index}`} id={`panel-header-${index}`}>
                  <Typography>{el.question}</Typography>
                </AccordionSummary>
                <Collapse in={expandedIndexes.includes(index)}>
                  <AccordionDetails>
                    <Typography>{el.answer}</Typography>
                  </AccordionDetails>
                </Collapse>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default  AccordionComponent;