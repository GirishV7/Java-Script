const arr = ["js","cpp","java","python"];

// arr.forEach( function (val){
//     // console.log(val);
    
// })

// arr.forEach((val)=>{
//     console.log(val);
    
// })

// function printme(item){
//     console.log(item);
// }

const printme = (item, index, arr)=>{
    // console.log(item,index,arr);
    // console.log(index);
    // console.log(arr);
    
    
    
}
arr.forEach(printme);


const mycode= [
    {
        language: "Java",
        extention: "java"
    },
    {
        language: "Java script",
        extention: "js"
    },
    {
        language: "python",
        extention: "py"
    }
]

mycode.forEach((item)=>{
    console.log(item.language);
    
})