const user = {
    username : "Girish",
    id : 123,

    message : function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
        
    }
}

// user.message();
// user.username ="sam";
// user.message();

// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai();

// const chai = function(){
//     const username = "Girish";
//     console.log(this.username);
//     console.log(this);
    
// }
// chai();

// const ch = () => {
//     const user = "Girish ";
//     console.log(user);
//     console.log(this);
// }

// ch();

const arr = (num1,num2)=>{
    return num1+num2;
}

console.log(arr(12,23));

const arr1 = (num1,num2)=> num1+num2;

console.log(arr1(10,20));

const ne= ()=> ({name:'Girish'});

console.log(ne());

