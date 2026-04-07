/// for in 

const obj = {
    js : 'javascript',
    py : 'python',
    cpp : 'c++'
}

for(const key in obj ){
    // console.log(` the key is ${key} and the value is ${obj[key]}`);
    
}

const arr = ['js','cpp','java','python'];

for(const key in arr){
    // console.log(arr[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA","United states of america ");
map.set("FR","France");

for(const key in map.keys()){
    console.log(key);
    
}