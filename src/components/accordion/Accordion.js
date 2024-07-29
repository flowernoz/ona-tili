import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./Accordion.css"

function AccordionFunc() {
  let items = [
    { heading: "1. Yangi hovli", content: "..." },
    { heading: "2. Yaxshi niyat", content: "..." },
    { heading: "3. Obod yurt istiqboli", content: "..." },
    { heading: "4. Ikki dangasa", content: "..." },
    { heading: "5. Qovun sayli", content: "..." },
    { heading: "6. Buyuk ipak yo'li", content: "..." },
    { heading: "7. Muallim siymosi", content: "..." },
    { heading: "8. Ona qirg'ovul", content: "..." },
    { heading: "9. Do'st tanlash haqida", content: "..." },
    { heading: "10. To'y", content: "..." },

  ];

  return (
    <Accordion allowZeroExpanded>
      {items?.map((item, index) => (
        <AccordionItem className='items' key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>{item?.heading}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item?.content}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionFunc;
