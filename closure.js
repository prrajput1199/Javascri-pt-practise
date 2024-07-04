//function along with its lexical scope forms a closure

//In other words, a closure gives you access to an outer function's scope from an inner function.

//In JavaScript, closures are created every time a function is created, at function creation time.

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).(MDN definition)

//function bind together with its lexical scope is called as closure


function x(){
   let a=10;
   
   function Y() {
     console.log(a);
   }
   
   a=100

   //when we are returning Y we are returning closure (function bundled together with its lexical environment)

   //Here a is pointing towards the reference to a (address) not the value of "a"
   return Y;
}

var z=x();
console.log(z);
//output 100