let arr1=["Pratik","Akash","Shubham"];
// let arr2=["Santosh","Moni","Soni"];

//Not a right way to copy array
// let arr2=arr1;


//right way
// let arr2=arr1.slice(0).concat("Santosh","Moni","Soni");

// OR

//use spread operator

let arr2=[...arr1];

arr2.push("Tanu");

console.log(arr1);
console.log(arr2);



