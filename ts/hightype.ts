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
  readonly explicit: string = 'Hello, Typescript';
  readonly implicit = 'Hello, Typescript'; // Literal Type!
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
    kk();
  }

  bark() {
    barkOfCat.bind(this)();
  }
}

const lucy: Dog = new Dog('Lucy', 10);
lucy.bark();
lucy.move();
const maxx = new Dog('Max', 12);
maxx.howling();
console.log('🚀  maxx:', maxx.getName(), maxx.getAge());

const happy = new Cat('Happy');
happy.setAge(5);
happy.bark();
happy.kukuki();

interface ICat extends Animal {
  kukuki(): void;
}

class CatDog extends Dog implements ICat {
  kukuki() {
    kk();
  }
  bark() {
    barkOfCat.bind(this)();
  }
}

function kk() {
  console.log('꾹!꾹!');
}

function barkOfCat(this: Cat) {
  console.log('야옹!', this.name);
}

const k = new CatDog('개냥이', 1);
const d: Dog = k;
const e: ICat = k;

interface N {
  id: number;
}
interface A extends N {
  name: string;
}

type T1 = { id: number };
type T2 = { name: string };
type TTUser = T1 & T2;
const hong: TTUser = { id: 1, name: 'Hong' };

interface I1 {
  id: number;
}
interface IUser extends I1 {
  name: string;
}
// interface IUser extends I1, I2 {}
const kim: IUser = { id: 2, name: 'Kim' };

// Teacher는 StudentTeacher 하위 클래스의 인스턴스에서 사용할 수 있는 teach 메서드를 선언
class Teacher {
  teach() {
    console.log('teaching!');
  }
}

class StudentTeacher extends Teacher {
  learn() {
    console.log('Learning!');
  }
}
const teacher = new StudentTeacher();

teacher.teach(); // OK (기본 클래스에 정의됨)
teacher.learn(); // OK (하위 클래스에 정의됨)
// const teacher:Teacher = new StudentTeacher(); // OK
