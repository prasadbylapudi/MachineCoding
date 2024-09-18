import React, { useState, useEffect } from "react";

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  const handleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={handleAccordion}>
        <span className="title">{title}</span>
        <span className="down-arrow">🔽</span>
      </div>
      <div className="accordion-body">{isOpen && <p>{body}</p>}</div>
    </div>
  );
};

export default AccordionItem;
