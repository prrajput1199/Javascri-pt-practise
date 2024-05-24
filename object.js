let obj={
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

