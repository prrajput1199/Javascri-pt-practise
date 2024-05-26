// this represents the object in which the item is present
let obj={
    name:"Pratik",
    age:"24",
    fun:function fun1() {
        console.log(this)
        console.log(this.name);
    }
}

obj.fun();

function Samplefun(){
    // console.log(this);
    console.log("I am inside fun2");
    console.log(this);
}

window.Samplefun();
console.log(this);