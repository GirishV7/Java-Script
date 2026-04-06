const mysym= Symbol("key1");
const user= {
    name:'Girish',
    age: 22,
    email: 'Girish@gmail.com',
    [mysym]:"hello"
}
// Object.freeze(user);
// user.email="Girishv9353@gmail.com";
// console.log(user.name);
// console.log(user["email"]);
// console.log(user[mysym]);

// console.log(user);

user.greeting = function(){
    console.log("Hello js user");
}
user.greetingtwo = function(){
    console.log(`obj name is ${this.name}`);
    
}

console.log(user.greeting());
console.log(user.greetingtwo());



