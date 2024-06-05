// function Aminal(name) { console.log('aaa', name)}
// new Aminal()
class Animal {
  static ID = 1;
  name;
  constructor(name) {
    this.name = name;
    console.log('==> Born!!', this.name);
  }

  bark() {
    console.log('bark!!!');
  }
}

const ani = new Animal('Ani');
ani.bark();

export class Dog extends Animal {
  // overriding
  bark() {
    console.log('Bow wow!!!');
  }
}

export default class Cat extends Animal {
  #age = 10; // private
  bark() {
    console.log('miaow~', this.#age, this.name);
  }

  getAge() {
    return this.#age;
  }

  set age(_age) {
    this.#age = _age;
  }

  get age() {
    return this.#age;
  }

  [Symbol.iterator]() {
    return this.name.split('').values();
  }

  values() {
    return this[Symbol.iterator]();
  }
}

const lucy = new Dog('Lucy');
lucy.bark();

const nabi = new Cat('Nabi');
nabi.bark();
console.log('🚀>>  nabi.name:', nabi.name);
nabi.age = 12;
console.log('🚀-->>  nabi.age:', nabi.age); // age()
console.log('🚀-->>  nabi.getAge:', nabi.getAge());

// speak는 Animal 만 받을 수 있다! (다형성)
function speak(animal) {
  animal.bark();
}

speak(nabi);
speak(lucy);
speak(ani);

console.log('---------------------');
//       instance    class
console.log(ani.ID, Animal.ID, ani.toString());

// ex. Animal을 상속받은 Pig 클래스를 작성하시오.
class Pig extends Animal {
  bark() {
    console.log('꿀! 꿀!');
  }
}

const gg2 = new Pig('꿀꿀이');
gg2.bark();
