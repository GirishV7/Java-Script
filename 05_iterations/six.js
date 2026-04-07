// const arr = ["js","cpp","java","python"];

// const values = arr.forEach( (item) => {
//     // console.log(item);
// });

// console.log(values);
// console.log(arr);

/// filter 

// const num=[1,2,3,4,5,6,7,8,9,10];

// const newnum = num.filter( (val) => val>4);

// const newnum = num.filter( (val) => {
//     return val>4;
// }) 

// const newnum=[];

// num.forEach( (val) => {
//     if(val<4){
//         newnum.push(val);
//     }
// })

// console.log(newnum);

const books=[
    {
        title:"B1", genre: "Nf",publish:1989,edition:2010
    },
    {
        title:"B2", genre: "Nf",publish:1989,edition:2010
    },
    {
        title:"B3", genre: "Nf",publish:1989,edition:2010
    },
    {
        title:"B4", genre: "Nf",publish:1989,edition:2010
    },
    {
        title:"B5", genre: "History",publish:1989,edition:2010
    },
    {
        title:"B6", genre: "Nf",publish:1989,edition:2010
    },
    {
        title:"B7", genre: "History",publish:1989,edition:2010
    }
];

const his = books.filter( (bk)=> bk.genre === "History");

console.log(his);
