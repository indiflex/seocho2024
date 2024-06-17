class Student {
  name;
  constructor(name: string) {
    this.name = name;
  }

  급식() {
    console.log('급식!', this.name);
  }
  청소() {
    console.log('청소합시다!', this.name);
  }
}

class Transfer extends Student {
  disTransfer = true;
  청소() {
    throw new Error('전학생은 청소에서 제외됩니다!');
  }
}

const s = new Student('학생');
const t = new Transfer('전학생');
// s.급식();
// s.청소();
// t.급식();
// t.청소();

function o급식(stu: Student) {
  console.log('급식!', stu.name);
}
function o청소(stu: Student) {
  if (stu instanceof Transfer) throw new Error('전학생은 청소에서 제외됩니다!');

  console.log('청소합시다!', stu.name);
}

o급식(s);
o급식(t);
o청소(s);
o청소(t);
