import React from "react";

function Dice({ val }) {
  //   const generateRandom = () => {
  //     let randomNumber = Math.floor(Math.random() * 6) + 1;
  //     return randomNumber;
  //   };

  return <div className="dice-face">{val}</div>;
}

export default Dice;
