let name={
    firstname:"Pratik",
    lastname:"Rajput",
   
}

let printFullname = function(Hometown,state){
    console.log(this.firstame + " " + this.lastname);
}

let name2={
    firstname:"Sachin",
    lastname:"Tendulkar",
}

//call method
//>Call is a function that helps you change the context of the invoking function. In simple terms, it helps you replace the value of "this" keyword inside a function with whatever value we want.

printFullname.call(name2,"Mumbai","Maharashtra");

//Apply method
//Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

printFullname.apply(name2,["Mumbai","Maharashtra"]);

//bind method
//Bind is a function that helps you create another function that we can execute later with the new context of "this" keyword that is provided
let print= printFullname.bind(name2,"Mumbai","Maharashtra");
print();