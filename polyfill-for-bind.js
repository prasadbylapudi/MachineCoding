let person = {
  firstName: "prasad",
  lastName: "bylapudi",
};

let printName = function (state, city) {
  console.log(
    this.firstName + " " + this.lastName + " from " + state + " , ",
    city
  );
};


let printMyname=printName.bind(person,"Andhra Pradesh","vizag")   

printMyname()
Function.prototype.myBInd=function(obj,...args1){
    if(typeof this !== "function"){
        throw new Error("not acceptable")
    }
    obj.fn=this;
    return function(...args2){
        obj.fn(...args1,...args2);
    }
}
const printMyname2=printName.myBInd(person,"Jammu Kashmir","srinagar")

printMyname2()