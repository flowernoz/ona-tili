import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "./Accordion.css";

function AccordionFunc({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Accordion allowZeroExpanded>
      {data?.map((item, index) => (
        <AccordionItem className="items" key={index}>
          <AccordionItemHeading onClick={() => setActiveIndex(index)}>
            <AccordionItemButton>
              {item?.title}{" "}
              {index === activeIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item?.text}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionFunc;
