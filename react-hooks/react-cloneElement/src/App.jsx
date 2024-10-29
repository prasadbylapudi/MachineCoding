import React, { useState } from "react";
import "./App.css";

const Child = ({ name, age }) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
);

function App() {
  const childElement = <Child name="Alice" />;

  // Cloning the child element and adding the `age` prop
  const clonedChild = React.cloneElement(childElement, { age: 25 });

  return (
    <div>
      <h1>Parent Component</h1>
      {clonedChild}
    </div>
  );
}

export default App;
