function myfunc(){
    console.log("g");
    console.log("i");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
}

// myfunc();

// function addtwonumber(number1,number2){
//     console.log(number1+number2);
    
// }

// addtwonumber(3,4);


function login(username = "Giri"){
    if(!username){
        console.log("Please enter valid user name");
        return ;
    }
    return `${username} is just logged in `;
}

// console.log(login("Girish"));
// console.log(login());


// function cart(num1){
//     return num1;
// }

// console.log(cart(200));

// function cartprice(val1,val2,...num1){
//     return num1;
// }

// console.log(cartprice(100,200,300,0,300,40,50));


const user = {
    username : "Kusheel",
    price : 99
}

function obj(anyobj){
    console.log(`name is ${anyobj.username} and his price is ${anyobj.price}`);
}

obj(user);