//Constructor functions technically are normal functions with 2 rules

//the first letter of the name of that function should be capital

//They should be executed only with new operator

//In class-based, object-oriented programming, a constructor (abbreviation: ctor) is a special type of function called to create an object.

function Fun(){
   let name="Pratik";
   this.name=name;

   return this.name;

   //suppose you did'nt write new add this part
   
    // if(!new.target){
    //     return new Fun(name);
    // }
}

let newObj = new Fun();
console.log(newObj.name);

//suppose you did'nt write new

// let newObj = Fun();
// console.log(newObj);