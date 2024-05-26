let array=[23,34,567,890,-5,4321];
console.log(array);
console.log(array.length);

let s= new Set([12,12,23,43,45,44,34]);
s.add(29);
console.log(s);
console.log(s.length);

let length=0;
for(let element of s){
    length++;
}
console.log(`length of the set is ${length}`);