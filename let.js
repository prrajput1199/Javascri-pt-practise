//In the Temporal dead zone, a variable exists but it cannot be accessed until it is initialized with some value

// OR

// 1)Temporal dead zone: The phase from hoisting(Getting some memory for the variable) to getting initialized by some value is nothing but the temporal dead zone 

// console.log(b);

//so it will give you reference error

//anything before line 17 is temporal dead zone for a

//let and const has been stored in seperate memory space not the global space 

//Difference between type Error,syntax error and reference error

let a=10;
//(let Can't be declared again)
// will give syntax error
// let a=20 OR var a=20

//var is stored in global scope 
var b = 100;
console.log(window.b)

//const: initialization is compulsory
// const a; (gives syntax error)

// const b;//(Type error)
// b=100;


