let a=1;
let b=2

for(let i=1;i<=5;i++){
    debugger;
    let sum=0;
    console.log(i);
    function fun1() {
        console.log(`I am inside function 1`);
        sum=a+b;
        a++;
        b++;
        return sum;
    }
    fun1();
    console.log(`Value of sum is ${sum}`)
}