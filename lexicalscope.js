
// global scope

function fun1(){
    console.log("I am inside function1 " + a);
    function fun2(){
        console.log("I am inside function2 "+ a);
    }
    fun2();
}

//it's because of hoisting
var a=1;

fun1();

// lexical scope=>the place where the item got created