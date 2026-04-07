const email="Girish@gmail.com"

if(email){
    console.log("got mail");
    
}else{
    console.log("enter email");
    
}

// falsy values
// false , 0 , BigInt 0n , null, -0, undefained , NaN, ""

// truthy values 
// 'false', "0",[], " ", true, {}, function(){}, 

const user=[];

if(user.length===0){
    console.log(`empty`);
}

const myobj ={};

if(Object.keys(myobj).length===0){
    console.log(`empty log`);
    
}

/// nullish coalescing operator(??) : null ,undefined

let val1 ;

// val1= 5??10;
// val1 = null ?? 10;
val1 = undefined ?? 20 ;

console.log(val1);

const price = 100;
price>=80?console.log("greter than 80") : console.log("less than 80");


