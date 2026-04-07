// for(let j=0;j<10;j++){
//     console.log(j);    
// }

for(let i=0;i<5;i++){
    // console.log(`Outer loop ${i}`);
    for(let j=0;j<5;j++){
        // console.log(`outer number ${i} and inner number ${j}`);
        // console.log(i + ' * ' + j + ' = '+ i*j );
    }
}

for(let i=0;i<10;i++){
    if(i==4){
        continue;
    }
    if(i==8){
        break;
    }
    console.log(i);
    
}