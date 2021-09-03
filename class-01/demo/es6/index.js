console.log('Hello from Node.js');

//  Constructor
/*
function Animal(type, name) {
  this.type = type;
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name}: bark!`;
}
*/

class Animal {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.age = props.age; // birthday is better
  }

  // "method" = function on the class
  speak() {
    return `${this.name}: ${this.noise}`;
  }
}

class Dog extends Animal {
  constructor(props) {
    // required if extends
    super(props); // Call Animal constructor

    this.noise = 'bark!'
  }
}

class Cat extends Animal {
  // Replace the base/super speak() function
  speak = () => {
    return 'meow'; // instead of setting noise
  }
}

let fido = new Dog({ type: 'dog', name: 'Fido' });
let pussInBoots = new Cat({ type: 'cat', name: 'Puss in Boots' });

console.log(fido);
console.log(fido.speak());

console.log(pussInBoots);
console.log(pussInBoots.speak());

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(this.name);
  console.log('Saying hi', this);
}

Person.prototype.sayHiToo = () => {
  console.log(this.name);
  console.log('Saying hi', this);
}

let p = new Person('Keith');
p.sayHi();
p.sayHiToo();
