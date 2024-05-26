function fun1(val){
  console.log(val);
}

function fun2(a,b,callbackfunction){
    console.log(`I am inside fun2`);
    sum=a+b;
    console.log(`Now I am going to call callbackfunction`);
    callbackfunction(sum);
}

fun2(12,34,fun1);