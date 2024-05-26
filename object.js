let obj={
  "1": "Just checking",
  name:"Pratik",
  "age":24,
  "college":"IIT Kanpur",
  fun: function coding() {
    console.log(`I'm passionate about coding`);
  },
  arrowfun:()=>{
    console.log(`I'm in arrow function`);
  }
};

//obj[key]=value;
// console.log(`Checking the type of key ${obj.}`);
obj.fun();
obj.arrowfun();
console.log(obj.college);
obj.branch="Aerospace";
let a="passion";
obj[a] = "coding";
console.log(obj);

// / printing all values of objectn using for in loop
for(let i in obj){
    console.log(obj[i]);
}


// printing all values of objectn using for of loop
for(let i of Object.keys(obj)){
    console.log(obj[i]);
}

// objects inside array

let arr=[
  {RollNo:22101045,name:"Pratik"},
  {RollNo:22101020,name:"Gaurav"},
  {RollNo:22101048,name:"Raghav"}
]
console.log(arr[2].name);

for(let i in arr){
  console.log(arr[i]);
}

for(let i of arr){
  console.log(i.name);
}

let [{name},,{name:name1}]=arr;
console.log(name);
console.log(name1);
// console.log(item2);



