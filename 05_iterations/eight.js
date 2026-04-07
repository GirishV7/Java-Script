const arr=[1,2,3,4];

// const total = arr.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and cur: ${curval}`);
//     return acc+curval;
// },0)

const total = arr.reduce((acc,curval)=>(acc+curval),0);

// console.log(total);

const cart = [
    {
        itemname:"js",
        price: 1999
    },
    {
        itemname:"java",
        price: 2999
    },
    {
        itemname:"python",
        price: 999
    },
    {
        itemname:"cpp",
        price: 4999
    },
    {
        itemname:"mobile",
        price: 3999
    }
];

const totalprice = cart.reduce( (acc,item)=> (acc+item.price),0);

console.log(totalprice);

