// there are 7 types of operators in JS
// Arithmetic, assignment, comparison, logical, ternary, typeof, and bitwise operators.

// or=> ||
console.log(2 > 3 || 3 > 2);

// and operator => &&
console.log(2 > 3 && 3 > 2);

let a = 2;
// agar break nhi lagaya toh jahase case true hoga vahase sare cases run honge
switch (a) {
  case 1:
    console.log("I am 1");
    break;

  case 2:
    console.log("I am 2");
    break;

  case 3:
    console.log("I am 3");
    break;

  default:
    console.log("Wrong button is pressed");
    break;
}

// jab bhi variable add karna hota hain conslole main toh + add karo
// for (let index = 1; index <= 10; index++) {
// //   console.log("2 * " +index+ " = " +2*index);
//   console.log(`2* ${index} = ${2*index}`);
// }

let i=0;
// while (i <= 10) {
//     console.log(`2* ${i} = ${2*i}`);
//     ++i;
// }

do {
    console.log("I am in do while loop");
    console.log(`2* ${i} = ${2*i}`);
    ++i;
} while (i <= 10);