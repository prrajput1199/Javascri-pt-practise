// Promises remain asynchronous. They allow you to write asynchronous code in a way that looks more synchronous, but the actual execution remains non-blocking.

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

// function LoadingData() {
//   return new Promise((resolved, rejected) => {
//     console.log("Processing...");
//     setTimeout(() => {
//       console.log(`1) Loading Data`);
//       resolved();
//     }, 1000);
//   });
// }

// function collectingData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(`2) collecting Data`);
//       res();
//     }, 1000);
//   });
// }

// function approvingData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(`3) approving Data`);
//       res();
//     }, 1000);
//   });
// }

// function approved() {
//   setTimeout(() => {
//     console.log(`4) approved Data`);
//   }, 1000);
// }

// LoadingData()
//   .then(collectingData)
//   .then(approvingData)
//   .then(approved)
//   .catch((err) => {
//     console.log(err);
//   });

//another example
//
let obj1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    let RollNumber = [1, 2, 3, 4, 5];
    // resolved(RollNumber);
    rejected("Promise is not fulfilled");
  }, 1000);
});

let GetRollno = (indexData) => {
  return new Promise((resolved, rejected) => {
    let biodata = {
      name: "Pratik",
      age: "24",
    };
    setTimeout(
      (indexData) => {
        resolved(
          `My name is ${biodata.name}, my age is ${biodata.age} and the roll number of the student is ${indexData}`
        );
      },
      1000,
      indexData
    );
  });
};

obj1.then((rollno) => {
    console.log(rollno);
    return GetRollno(rollno[2]);
  })
  .then((val) => {
    console.log(val);
  }).catch((err)=>{
    console.log(err);
  })
