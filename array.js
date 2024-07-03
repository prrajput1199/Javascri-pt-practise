let name =["Pratik", "Akash", null, undefined,1];

// we use unshift when we want to push element at the end of an array
name.push("John");

// we use unshift when we want to push element at the start of an array
name.unshift("undertaker");

// splice syntax=>name.splice(starting index, kitne elemnets ko delete karna hain,kya add karna hain);
//splice purane array ko hi modify karta hain

//slice syntax=>{name.slice(starting index,ending index);}
//slice se slice ke tarah elements nikal kar naya array banta hain and vo purane array ko modify nhi karta

name.splice(2,0,"Santosh");
name.splice(2,1,"shubbham");

let name1 = name.slice(1,3);

console.log(`name1 is ${name1}`);
console.log(name);
let size=name.length;
console.log(`Size of the array is ${size}`);


let num=[10,20,30,40,50,60,80];

// sequence of argument is mandatory

num.forEach((value,index, array) => {
    console.log(`value is ${value},index is ${index}, array is ${array}`);
});

// The forEach() method doesn't return anything
// forEach se value retuen karake store nhi kar sakte

let a = num.forEach((value,index, array) => {
    return value;
});

// best alternative of forEach is map
// sequence of argument(Value,index,array) is mandatory

let b = num.map((value,index, array) => {
    return value + 10;
});


console.log(`value of a is ${a}`);
console.log(`value of b is ${b}`);

let num1=[20,40,60];
let num2=[70,100,120];

// let num3=num1.concat(num2);
let num4 = num1.slice(0,1);
let num5= num1.splice(1,1,67);

console.log(`num4 is ${num4}`);
console.log(`num1 is ${num1}`);
console.log(`num5 is ${num5}`);
console.log(`num1 is ${num1}`);

// console.log(`num3 is ${num3}`);

let numbers=[10,20,30,30,60,49];

let newnumber = numbers.filter((value,index,arr)=>{
      if (value > 10 && value < 40) {
        return value;
      } 
      
})

let findLastnumber = numbers.findLastIndex((val)=>{
      return val==30;
})

let findfirstnumber = numbers.findIndex((val)=>{
    return val==30;
})

console.log(`after first finding number ${findfirstnumber}`);

console.log(`after last finding number ${findLastnumber}`);

console.log(`after filtering ${newnumber}`);

let arr=[10,23,4567];

let string= arr.toString();

console.log(`converted to ${typeof string}`);

let string1 = "12,234,56,543,3";
console.log(typeof string1);
let arr1=string1.split(",");

// arr1.forEach(element => {
//     console.log(element);
// });
console.log(typeof arr1);
console.log(arr1);

let newstring = arr1.join(" and ");
console.log(`old array =>`, `${arr1}`);

console.log(newstring);

