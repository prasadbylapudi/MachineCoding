import React, { useState, useEffect } from "react";

const data = [
  {
    name: "john cena",
    profession: "wrestler",
  },
  {
    name: "john doe",
    profession: "actor",
  },
  {
    name: "mathew",
    profession: "writer",
  },
  {
    name: "duplex",
    profession: "wrestler",
  },
  {
    name: "gary peterson",
    profession: "SDE",
  },
  {
    name: "duplex",
    profession: "wrestler",
  },
  {
    name: "gary peterson",
    profession: "SDE",
  },
  {
    name: "duplex",
    profession: "wrestler",
  },
  {
    name: "gary peterson",
    profession: "SDE",
  },
  {
    name: "duplex",
    profession: "wrestler",
  },
  {
    name: "gary peterson",
    profession: "SDE",
  },
  {
    name: "duplex",
    profession: "wrestler",
  },
  {
    name: "gary peterson",
    profession: "SDE",
  },
  {
    name: "duplex",
    profession: "wrestler",
  },
  {
    name: "gary peterson",
    profession: "SDE",
  },
  {
    name: "duplex",
    profession: "wrestler",
  },
  {
    name: "gary peterson",
    profession: "SDE",
  },
];
const InfiScroll = () => {
  function handleScroll() {
    console.log("scrollly", window.scrollY);
    console.log("height", document.body.scrollHeight);

    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      alert("reached bottom");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="infiScroll-container">
      {data.map((item, index) => (
        <div className="card">
          <h1>{item.name}</h1>
          <h1>{item.profession}</h1>
        </div>
      ))}
    </div>
  );
};

export default InfiScroll;
