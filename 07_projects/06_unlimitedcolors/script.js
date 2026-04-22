// Generate the random color 

const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

// console.log(randomcolor());
let set
const startb = function(){
    const changecolor = function(){
        document.body.style.backgroundColor = randomcolor();
    }
   set = setInterval(changecolor,1000);
};

const stopb = function(){
    clearInterval(set);
    set = null;
};

document.querySelector('#btn1').addEventListener('click',startb);
document.querySelector('#btn2').addEventListener('click',stopb);
