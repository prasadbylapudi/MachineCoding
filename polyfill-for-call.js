
let name = {
  firstName: "Prasad",
  lastName: "Bylapudi",
  //   printFullName: function () {
  //     console.log(`name is : ${this.firstName} ${this.lastName}`);
  //   },
};
// name.printFullName();

function printFullName(city) {
  console.log(`he is ${this.firstName} ${this.lastName} from ${city}`);
}

let name2 = {
  firstName: "ronie",
  lastName: "coleman",
};

// printFullName.call(name2);

Function.prototype.myCall = function (obj, ...args) {
  console.log("ojbect", obj);
  console.log("args are :", args);
  console.log("this refers to :", this); //function

  if (typeof this !== "function") {
    throw new Error("not acceptable");
  }
  obj.fn = this;

  obj.fn(...args);
};

printFullName.myCall(name2, "Vizag");
