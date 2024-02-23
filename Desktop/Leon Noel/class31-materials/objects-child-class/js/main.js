//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log("meoww");
  }
}

class Dragon extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class Frog extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

let simba = new Dog("Simba", "Sheperd");
let milly = new Cat("Maliya", "white-black-cowbreed");
let drogan = new Dragon("Drogan, Game of Thrones");
let rabit = new Frog("ribbet", "green");
