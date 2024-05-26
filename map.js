let map1= new Map([[1,"one"],[2,"two"],["whole number",[1,2,3,4]],["fname","yash"]]);

console.log(map1);
console.log(`The value of whole number is ${map1.get("whole number")}`);

// to get the value => map.get();
// to get the keys  =>map.keys();

let getkeys=map1.keys();

for(let el of getkeys){
    console.log(el);
}

// ye wala data structure wala map hain

// object wale map main hamesha key string hi rahegi or agar nhi hogi toh convert hogi string main