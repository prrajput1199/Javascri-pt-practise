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
  
//   LoadingData()
//     .then(collectingData)
//     .then(approvingData)
//     .then(approved)
//     .catch((err) => {
//       console.log(err);
//     });

async function sample(){
    await LoadingData();
    await approvingData();
    await approved();
}

sample().then(collectingData).catch((err)=>{
    console.log(err);
});