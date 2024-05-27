// function fun(task){
//     return new Promise((resolve,rejected)=>{
//           if(task){
//             resolve("completed")
//           }
//           else{
//             rejected("Task is not completed")
//           }
//     })
// }

// let onResolve=(res)=>{
//     console.log(res);
// }

// let onReject=(err)=>{
//     console.log(err);
// }

// fun(true).then(onResolve).catch(onReject);

// solution to callbackhell with Promise;

//callback hell

function LoadingData() {
  return new Promise((resolved, rejected) => {
    console.log("Processing...");
    setTimeout(() => {
      console.log(`1) Loading Data`);
      resolved();
    }, 1000);
  });
}

function collectingData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`2) collecting Data`);
      res();
    }, 1000);
  });
}

function approvingData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`3) approving Data`);
      res();
    }, 1000);
  });
}

function approved() {
  setTimeout(() => {
    console.log(`4) approved Data`);
  }, 1000);
}

LoadingData()
  .then(collectingData)
  .then(approvingData)
  .then(approved)
  .catch((err) => {
    console.log(err);
  });
