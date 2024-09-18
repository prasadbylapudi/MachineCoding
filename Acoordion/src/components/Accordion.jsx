import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Accordion Item 1",
    data: "Urban Company is a tech-enabled home services marketplace. which are delivered in the comfort of their home and at a",
  },
  {
    title: "Accordion Item 2",
    data: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, sint laboriosam sequi expedita autem impedit provident saepe sed rerum! Cupiditate corrupti pariatur deleniti fugiat delectus ullam eligendi dignissimos enim corporis.",
  },
  {
    title: "Accordion Item 3",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt nisi reprehenderit harum quasi quos incidunt eaque cupiditate. Temporibus neque illum, eligendi culpa vel velit quaerat omnis doloribus a!",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            body={item.data}
            isOpen={index === openIndex ? true : false}
            setIsOpen={() => {
              index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
