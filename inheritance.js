
class Animal {
    constructor(name1) {
        this.name1 = name1;
    }
    speak() {
       console.log("animal sound",this.name1);
    }
}
class Dog extends Animal {
    animalSound(){
        this.speak();
    }
}

let dog = new Dog("Dog");
dog.speak();
dog.animalSound();