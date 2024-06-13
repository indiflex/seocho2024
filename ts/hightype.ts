interface User {
  id: number;
  name: string; //
}

interface Dept {
  id: number;
  dname: string; //
  captain: string; //
}

// interface Ud2 {
//   [k: string]: string | number;
//   id: number;
//   addr: string;
// }

type Ud2 = (User | Dept) & { addr: string };

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };

// ---------------- class
interface Animal {
  move(): void;
  // move: () => void;
}

class Pet implements Animal {
  protected name;
  protected age?: number;
  constructor(name: string) {
    this.name = name;
  }

  setAge(xage: number) {
    this.age = xage * 12;
  }

  getAge() {
    return (this.age ?? 0) / 12;
  }

  move(): void {
    console.log('Pet is moving!!');
  }

  // getter
  getName() {
    return this.name;
  }
}

class Dog extends Pet {
  constructor(name: string, age: number) {
    super(name);
    this.setAge(age);
  }
  bark() {
    console.log('멍멍!', this.name);
  }
  howling() {
    console.log('아~오~', this.name);
  }
  move() {
    console.log('어슬렁 어슬렁', this.name);
  }
}

class Cat extends Pet {
  kukuki() {
    console.log('꾹!꾹!');
  }

  bark() {
    console.log('야옹!', this.name);
  }
}

const lucy = new Dog('Lucy', 10);
lucy.bark();
lucy.move();
const maxx = new Dog('Max', 12);
maxx.howling();
console.log('🚀  maxx:', maxx.getName(), maxx.getAge());

const happy = new Cat('Happy');
happy.setAge(5);
happy.bark();
happy.kukuki();
