//callback hell

function LoadingData(callbackfunction){
  setTimeout(()=>{
    console.log(`1) Loading Data`);
    callbackfunction();
  },1000);
}

function collectingData(callbackfunction){
    setTimeout(()=>{
        console.log(`2) collecting Data`);
        callbackfunction();
    },1000)
}

function approvingData(callbackfunction){
    setTimeout(()=>{
        console.log(`3) approving Data`)
        callbackfunction();
    },1000)

}

function approved(){
    setTimeout(()=>{
        console.log(`4) approved Data`)
    },1000)
}



LoadingData(function fun(){
    collectingData(function fun1() {
        approvingData(function fun3(){
            approved();
        });
    });
});
