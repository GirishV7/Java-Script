// const promiseone = new Promise(function(resolve,reject){
//     console.log('Promise is completed 1');
//     setTimeout(function(){
//         console.log('Promise is completed');
//         resolve();
//     },1000)
// });

// promiseone.then(function(){
//     console.log("Promise consumed");
// });

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("resolved 2");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("resolved");
    
// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({User : "Girish", email :"girish@gmail.com"});
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user);
    
// })

// const promisefour = new Promise(function(resolve,reject){
//     let error = false;
//     if(!error){
//         resolve({Username: "Giri" , Password : "giri@123"});
//     }
//     else{
//         reject('Somthing went wrong');
//     }
// })

// promisefour.then((user)=>{
//     console.log(user);
//     return user.Username;
// }).then((username)=>{
//     console.log(username);
    
// }).catch((erorr)=>{
//     console.log(erorr);
    
// }).finally(()=> console.log("The promise is either resolved or rejected")
// )

// const promisefive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username:"Giri",Pass:"giri@123"});
//         }
//         else{
//             reject('Error: Something went wrong');
//         }
//     },1000)
// })

// async function asyncfive() {
//     try{
//         const res = await promisefive
//         console.log(res.username);
        
//     }catch(error){
//         console.log(error);
        
//     }
// }

// asyncfive();


// async function getallusers(){
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await response.json();
//         console.log(data);
//         // console.log(response);
        
//     }
//     catch(error){
//         console.log("Error : ", error);
        
//     }
    
// }

// getallusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})