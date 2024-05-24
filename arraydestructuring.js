let array1=["Pratik","Akash","Shubham","Santosh"];

// not a good practise
// let item1=array1[0];

// good practise
let [item1,item2,...item3]=array1;

console.log(item1);
console.log(item2);
console.log(item3);