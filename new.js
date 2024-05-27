//new keyword

function fun(){
    let name="Pratik";
    this.name=name;
    return this.name;
}

// console.log(new fun());
let obj = new fun();
console.log(obj.name);
