// const tinuser = new Object();
const tinderuser = {};

tinderuser.id="123a";
tinderuser.name="Giri";
tinderuser.isLoged=false;

// console.log(tinderuser);

const regular ={
    fullname : {
        username :{
            firstname: "Giri",
            lastname: "sh"
        }
    }
}

// console.log(regular.fullname);

// const obj1 = {1:"a",2:"b"};
// const obj2 = {3:"c",4:"d"};

// const obj3={obj1,obj2};
// console.log(obj3);

// const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);

// const obj5 = {...obj1,...obj2};
// console.log(obj5);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('name'));

const course ={
    name: "js",
    id:"123",
    instructor:"Girish"
};

// console.log(course);

const {instructor : ins}= course;
console.log(ins);




