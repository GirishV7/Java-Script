# project related Dom 

## project link 

## solution of the project 
## project one 
``` JavaScript 

console.log('Hello');

```

## project1 solution

```
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");
let intervalId = null;

buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target.id);
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
        let id = e.target.id;
        switch(id){
            case 'grey' : body.style.backgroundColor = 'grey';
            break;
            case 'white' : body.style.backgroundColor = 'white';
            break;
            case 'blue' : body.style.backgroundColor = 'blue';
            break;
            case 'yellow' : body.style.backgroundColor = 'yellow';
            break;
            default : 
            break;
        }

    });

});

const hd = document.querySelector('#mul');
hd.addEventListener('click',function(){
    function getRandomColor() {
        return `rgb(${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)})`;
    }
    if (intervalId === null) {
        intervalId = setInterval(() => {
            body.style.backgroundColor = getRandomColor();
        }, 1000);
    } 
    else {
        clearInterval(intervalId);
        intervalId = null;
    }
});


```

## Project 2

```
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.results');

    if(height<0 || height === '' || isNaN(height)){
        results.innerHTML = `Plsease enter a valid number ${height}`;
    }else if(weight<0 || weight === '' || isNaN(weight)){
        results.innerHTML = `Plsease enter a valid number ${weight}`;
    }else{
        const res = (weight /((height*height)/10000)).toFixed(2);
        if(res<18.6){
            results.innerHTML = `Under Weight ${res}`;
        }else if(res>=18.6 && res<=24.9){
            results.innerHTML =`Normal Weight ${res}`;
        }else{
            results.innerHTML = `Over Weight ${res}`;
        }
    }

})

```

## project 3

```
const clock = document.getElementById('clock');

setInterval(function(){
    const date = new Date();
    console.log(date);
    
    const time = date.toLocaleTimeString();
    clock.innerHTML = time;
},1000)



```