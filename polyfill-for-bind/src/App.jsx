import { useState } from "react";

function App() {
  let name = {
    firstName: "prasad",
    lastName: "bylapudi",
  };
  //regular function. this refer to name object.
  let printName = function (state, city) {
    console.log(
      this.firstName + " " + this.lastName + " from " + state + " , ",
      city
    );
  };
  //arrow function, this refers to global object window.
  // let printName = () => {
  //   console.log(this.firstName + " " + this.lastName);
  // };

  let printMyName = printName.bind(name, "Andhra Pradesh", "vizag");

  Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1); // its gonna return array, call is not gonna take array
    console.log("args are ", args);
    return function (...args2) {
      //obj.call(args[0], [...args2, ...params]);
      //call is not gonna take array, so use apply.
      obj.apply(args[0], [...args2, ...params]);
    };
  };

  let printMyName2 = printName.myBind(name, "Jammu Kashmir", "srinagar");

  printMyName();
  printMyName2();
  return (
    <div className="App">
      <h1>Polyfill for bind</h1>
      <h2>Checkout console for outpu</h2>
    </div>
  );
}

export default App;
