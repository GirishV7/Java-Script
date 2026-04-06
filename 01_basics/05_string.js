const name="Giri";
let age=22;

console.log(name+age+"Hello");

console.log(`Name ${name} age is ${age} hello`);

const gamename=new String("Girish");

console.log(gamename.length);
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));

console.log(gamename.indexOf('i'));

console.log(gamename.split(''));

const an= gamename.substring(0,4);
console.log(an);

// const another= gamename.slice(0,4);
// console.log(another);

const ano= gamename.slice(-6,2);
console.log(ano);

const newname="    hello   hi     ";
console.log(newname);
console.log(newname.trim());

console.log(newname.replace('hi','-'));

console.log(newname.includes('hi'));