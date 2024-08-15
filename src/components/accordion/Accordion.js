import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./Accordion.css";

function AccordionFunc({ data }) {
  return (
    <Accordion allowZeroExpanded>
      {data?.map((item, index) => (
        <AccordionItem className="items" key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>{item?.title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item?.text}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionFunc;
