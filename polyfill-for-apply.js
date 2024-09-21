
let name = {
  firstName: "prasad",
  lastName: "bylapudi",
};

//regular function. this refer to name object.

function printName(...args) {
    // console.log(args)
  let [state, city] = args;
  console.log(state, city);
  console.log(` ${this.firstName} ${this.lastName} from ${state} , ${city}`);
}

let name2={
    firstName:"Gary",
    lastName:"peterson"
}

// const output = printName.apply(name2, ["Andhra Pradesh", "vizag"]);


Function.prototype.myApply = function (obj,...args) {
    if(typeof this !== "function"){
        throw new Error("not acceptable")
    }
    if(!Array.isArray(args)){
        throw new Error("not acceptable")
    }
    obj.fn = this;
    obj.fn(...args);
}

printName.myApply(name2,["Jammu Kashmir","srinagar"])
//poly fill for apply