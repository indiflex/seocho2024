class Parent {
  a!: string;
  b!: number;
  value!: number | string | boolean; // number
}

class Child extends Parent {
  c!: boolean;
  value = Math.random() > 0.5 ? 1 : '...'; // number | string
}

class Child2 extends Parent {
  d!: boolean;
}
const c1: Child = new Child();
const c2: Child2 = new Child2();
let p1: Parent;
p1 = c1;
p1 = c2;
console.log(p1.value, c1.c);

function f(p: Child) {
  console.log(p.a, p.b);
}

f(c1); // Parent = Child;
// f(c2); // Parent = Child;
// f(p1); // Parent = Parent

// ex) 오류를 피하려면 ?? value: number | string = 0;
