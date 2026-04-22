# project related Dom 

## project link 

## solution of the project 
## project one 
``` JavaScript 

console.log('Hello');

```

## project1 solution

```JavaScript
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

```JavaScript
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

```JavaScript
const clock = document.getElementById('clock');

setInterval(function(){
    const date = new Date();
    console.log(date);
    
    const time = date.toLocaleTimeString();
    clock.innerHTML = time;
},1000)



```

## project 4 

```JavaScript
let randnumber = parseInt(Math.random()*100+1);

const sub = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const prev = document.querySelector('.guesses');
const last = document.querySelector('.lastresult');
const loworhi = document.querySelector('.lowOrHigh');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numberguess = 1;

let playgame = true;

if(playgame){
    sub.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validate(guess);
    })
}

function validate(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Number should be greter than 1 ');
    }else if(guess >100){
        alert('Number Should be less than 100');
    }else{
        prevguess.push(guess);
        if(numberguess === 11){
            displayguess(guess);
            displaymessage(`Game over the Random number is ${randnumber}`);
            endgame();
        } else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess === randnumber){
        displaymessage(`You guessed it right`);
        endgame();
    }else if(guess < randnumber){
        displaymessage(`The number is low`);
    }else if(guess > randnumber){
        displaymessage(`the number is greter`);
    }
}

function displayguess(guess){
    userInput.value = '';
    prev.innerHTML += `${guess} `;
    numberguess++;
    last.innerHTML = `${11-numberguess}`;
}

function displaymessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame"> start new game </h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}

function newgame(){
    const newbutton = document.querySelector('#newgame');
    newbutton.addEventListener('click',function(e){
        randnumber = parseInt(Math.random()*100+1);
        prevguess = [];
        numberguess = 1;
        prev.innerHTML = '';
        last.innerHTML = `${11-numberguess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
    })
    
}

```

## project 5 
```JavaScript
window.addEventListener('keydown',(e)=>{
    document.getElementById('div1').innerHTML = `<table border="1px">
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == " "? "Space" : e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`
})

```

## project 6

```JavaScript
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


```
