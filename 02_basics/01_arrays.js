const arr1=[1,2,3,4,5];
// console.log(arr1);

let arr2 = new Array(1,2,3,4,5,6);
// console.log(arr2);
// console.log(arr2[1]);

// arr1.push(6);
// console.log(arr1);
// arr1.push(7);
// console.log(arr1);

// arr1.pop();
// console.log(arr1);

// arr1.unshift(6);
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

// console.log(arr1.includes(3));

// let newarr= arr1.join();

// console.log(typeof newarr);

let myarr1 = arr1.slice(1,3);
console.log("A" , arr1);
console.log(myarr1);

console.log("B" ,arr1);
const myarr2 = arr1.splice(1,3);
console.log(myarr2);

console.log(arr1);