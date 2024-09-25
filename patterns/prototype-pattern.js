class Dog{
    constructor(name){
        this.name = name;
    }

    bark(){
        return "bow bow"
    }
}

const dog1 = new Dog("dog");
console.log(dog1.bark());
console.log(Dog.prototype);

Dog.prototype.feed = () => console.log("feeding dog");

dog1.feed();


class SuperDog extends Dog{

        constructor(name){
            super(name);
        }

        fly(){
            console.log("I am super DOg I can fly")
        }
}

const superAnimal=new SuperDog("Dinosaur");

superAnimal.bark();
superAnimal.fly()
