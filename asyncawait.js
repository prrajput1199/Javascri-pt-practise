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
  

// asynchronous programming is an essential concept in JavaScript that allows your code to run in the background without blocking the execution of other code.

// Promises remain asynchronous. They allow you to write asynchronous code in a way that looks more synchronous, but the actual execution remains non-blocking.

// function LoadingData() {
//     return new Promise((resolved, rejected) => {
//       console.log("Processing...");
//       setTimeout(() => {
//         console.log(`1) Loading Data`);
//         resolved();
//       }, 1000);
//     });
//   }

//   function collectingData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         console.log(`2) collecting Data`);
//         res();
//       }, 1000)
//     });
//   }

//   function approvingData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         console.log(`3) approving Data`);
//         res();
//       }, 1000);
//     });
//   }

//   function approved() {
//     setTimeout(() => {
//       console.log(`4) approved Data`);
//     }, 1000);
//   }


//   LoadingData()
//     .then(collectingData)
//     .then(approvingData)
//     .then(approved)
//     .catch((err) => {
//       console.log(err);
//     });

// async function sample(){
//     await LoadingData();
//     await approvingData();
//     await approved();
// }

// sample().then(collectingData).catch((err)=>{
//     console.log(err);
// });

let Obj1 = new Promise((res, rej) => {
  setTimeout(() => {
    let roll_number = [1, 23, 45, 21];
    res(roll_number);
  }, 1000);
});
// console.log(Obj1);
let GetBiodata = (indexData) => {
  return new Promise((res, rej) => {
    let data = {
      name: "Pratik",
      age: "24",
    };
    setTimeout(
      (indexdata) => {
        res(
          `My name is ${data.name}, my age is ${data.age} and the roll number of the student is ${indexData}`
        );
      },
      1000,
      indexData
    );
  });
};

async function GetData() {
  let RollNo = await Obj1;
  console.log(RollNo);

  let Biodata = await GetBiodata(RollNo[2]);

  console.log(Biodata);

  return Biodata;
}

let value1 = GetData().then((biodata)=>{
console.log(biodata);
}).catch((err) => {
  console.log(err);
});

console.log(value1);