const add = (x, y, z) => x + y + z;
console.log(add(5, 6, 7));

const element = `hello ${add(7, 8, 9)}`;
console.log(element);

const arr = [1, 2, 3];
const newArr = [...arr, 45];
console.log(newArr);

const p = { x: 34, y: 33, z: 90 };
const { m, ...n } = p
console.log(n);