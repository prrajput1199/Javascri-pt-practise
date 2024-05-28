//new keyword
<<<<<<< HEAD
// JavaScript new keyword is used to create an instance of an object that has a constructor function
=======
>>>>>>> c8b7c960a794cb0d6ab780843d52747fa15e97c8

function fun(){
    let name="Pratik";
    this.name=name;
    return this.name;
}

// console.log(new fun());
let obj = new fun();
console.log(obj.name);
