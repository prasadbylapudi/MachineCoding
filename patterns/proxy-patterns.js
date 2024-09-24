const person = {
  name: "Prasad Bylapudi",
  age: 24,
  nationality: "Indian",
};

const handler={
    get(target,prop){
        console.log("get:",prop)
        console.log("target:",target)
    },
    set(target,prop,value){
        console.log("set:",prop,value)
        // console.log("target:",target)
        // target[prop]=value;
        //dont' have to use the above process, u can use reflect.set
         Reflect.set(target, prop, value);
        console.log("target:",target)

    }
}

const personProxy=new Proxy(person,handler)
personProxy.name

personProxy.age=50

// https://www.patterns.dev/vanilla/proxy-pattern
//proxy takes two parameters
//target - the object to be proxied - person
//handler - the object that contains the traps  

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy





//* this shows The Proxy pattern can be used to enforce rules when setting properties on an object.
// * For example, you can create a proxy to ensure that certain properties meet specific criteria (e.g., type checking or range validation).

const user = {
    name: "Alice",
    age: 25,
};

const userProxy = new Proxy(user, {
    set(target, prop, value) {
        if (prop === "age" && (typeof value !== "number" || value < 0)) {
            throw new Error("Invalid age");
        }
        target[prop] = value;
        return true;
    }
});
// userProxy.age = 30;  // Works fine
// userProxy.age = -5;  // Throws an error



// * uses of proxy
/*
    - Data validation
    - Lazy Initialization
    - Logging or Auditing
    - API Request Handling / Caching
    - Access Control / Security
    - Object Virtualization

*/

