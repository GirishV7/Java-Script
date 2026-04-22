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