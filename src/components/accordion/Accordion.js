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
              <div>
                {index + 1}. {item?.title || "Mashq"}{" "}
              </div>
              {index === activeIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {item.savol && <p className="savol">{item.savol}</p>}{" "}
            {item?.text || <img src={item.img} />}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionFunc;
