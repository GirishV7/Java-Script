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