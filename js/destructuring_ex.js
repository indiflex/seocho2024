function f0(user) {
  console.log(user.id, user.name);
}

function f1_1({ id, name }) {
  console.log(id, name);
}

const f1_2 = function ({ id, name }) {
  console.log(id, name);
};

const f1 = ({ id, name }) => console.log(id, name);

const user = { id: 1, name: 'Hong' };
const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };
f1(user);
f1(hong);
f1(lee);
