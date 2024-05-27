//new keyword
// JavaScript new keyword is used to create an instance of an object that has a constructor function

function fun(){
    let name="Pratik";
    this.name=name;
    return this.name;
}

// console.log(new fun());
let obj = new fun();
console.log(obj.name);
