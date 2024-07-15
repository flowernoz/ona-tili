import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

function AccordionFunc() {
  let items = [
    { heading: "Accordion Item #1", content: "..." },
    { heading: "Accordion Item #2", content: "..." },
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
