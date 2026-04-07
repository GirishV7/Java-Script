/// for of

const arr= [1,2,3,4,5,6];

for(const num of arr){
    // console.log(num);
    
}

const greetings = ["hello ", "hi ", "how"];

for(const greet of greetings){
    // console.log(greet);
    
}

// maps 

const map = new Map();
map.set("IN", "India");
map.set("USA","United states of america ");
map.set("FR","France");

// console.log(map);

for(let key of map.keys()){
    // console.log(`Keys are ${key}`);
    // console.log(`values are  ${map.get(key)}`);
    
}

for(let [key,val] of map){
    console.log(`${key} :- ${val}`);
}

for(let [key] of map){
    console.log(key);
    
}
