// currying
const multiply = (a,b) => a*b;
const curriedMultiply = (a) =>(b) => a*b
const curriedMultiplyBy5 = curriedMultiply(5);

// console.log(curriedMultiply(5)(3));

console.log(curriedMultiplyBy5(4));