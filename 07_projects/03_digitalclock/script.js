const clock = document.getElementById('clock');

setInterval(function(){
    const date = new Date();
    console.log(date);
    
    const time = date.toLocaleTimeString();
    clock.innerHTML = time;
},1000)

