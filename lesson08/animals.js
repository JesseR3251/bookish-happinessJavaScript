class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return (this.name + ' makes a noise.');
  }
  toString() {
    return (this.name + ' is an animal. ' + this.speak());
  }
}
// Subclass
class Cat extends Animal {
  speak() {
    return (this.name + ' meows.');
  }
  toString() {
    return (this.name + ' is a cat. ' + this.speak());
  }
}
// Subclass
class Dog extends Animal {
  speak() {
    return (this.name + ' barks.');
  }
  toString() {
    return (this.name + ' is a dog. ' + this.speak());
  }
}
// Subclass
class Goat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  speak() {
    return (this.name + ' bleats.');
  }
  toString() {
    return (this.name + ' is a goat. ' + this.speak() + ' ' + this.name + ' is ' +this.age + ' years old.');
  }
}