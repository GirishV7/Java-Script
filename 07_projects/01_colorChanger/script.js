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


