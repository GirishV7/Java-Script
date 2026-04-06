const arr1=["one","two","Three"];
const arr2= ["four","five","six"];
// console.log(arr1);

// arr1.push(arr2);
// console.log(arr1);

// console.log(arr1[3][1]);

// const newarr = arr1.concat(arr2);
// console.log(newarr);

// const newarr = [...arr1,...arr2];
// console.log(newarr);
const newarr=[1,2,3,[4,3,5],6,[7,[8,9]]];
const n= newarr.flat(Infinity);
console.log(n);

console.log(Array.isArray("Girish"));
console.log(Array.from("Girish"));

const scor1=100;
const scor2=200;
const scor3=300;

console.log(Array.of(scor1,scor2,scor3));
