let arr=[
     //0
     ["Pratik",24],
     //1
     ["Gaurav",27],
     //2
     ["Yash",27],
     //3
     ["Raghav",27]
]

// for(let i=0;i<arr.length;i++){
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// for (let el of arr) {
//   for (let i of el) {
//   console.log(i);
//   }
// }

arr.forEach(element => {
    element.forEach((el)=>{
        console.log(el);
    })
});
