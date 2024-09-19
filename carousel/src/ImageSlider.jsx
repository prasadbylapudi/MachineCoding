import React, { useState } from "react";
import { data } from "./constants";
function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex >= 3) {
      setActiveIndex(0);
      console.log("beyond upper limit");
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const handlePrev = () => {
    console.log("active INdex", activeIndex);
    if (activeIndex <= 0) {
      console.log("less than zero");
      setActiveIndex(data.length - 1);
      console.log("beyond lower limit");
    } else {
      console.log("inside else");
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <img src={data[activeIndex]} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ImageSlider;
