let Global=10;
// global variable ko kahibi use kar sakte hain
function name(a) {
    console.log("hello" +a);
}

name(" I am Pratik ");

function add(a,b,c) {
    let local=10;
    // local ko function ke under hi use karte hain 
    console.log("Local " + local);
    return a+b+c;
    // console.log("answer is " + (a+b));
}
let a=2;
let b=10;

let addition = add(a,b,20);

console.log("Global variable " + Global);
console.log("addition is " + addition);

// anonymous function=> jis function ka koi nam na ho

let fun = function name() {
    console.log("inside anonymous function");
}

fun();

// IIFE(Immediiately invoked function expression)

(function name() {
    console.log("I am inside IIFE");
  })();

// arrow functions

let arrow = (a,b) => {
    return a+b;
}

let ans=arrow(23,45);
console.log("answer is " + ans);

// OR

let arrow1= (a,b) => console.log("one liner arroew function " + (a+b));

arrow1(2,4);


//function inside function

let fun1=()=>{
    console.log(`I am in function 1`);
    let fun2=()=>{
        console.log(`I am inside function 2`);
    }
    fun2();
}

fun1();
















