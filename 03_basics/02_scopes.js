

// if(1){
//     let a=300;
//     const b=20;
//     var c= 30;
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

function one(){
    const username="Girish";

    function two(){
        const website="hello";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

console.log(addone(5));


function addone(num){
    return num+1;
}


const addtwo = function(num){
    return num+2;
}
console.log(addtwo(5));