//HOF
const hof = ()=> ()=>  5;
hof(function a(x){return x})

//Closure
const closure = function(){
    let count = 0;
    return function incremet(){
        count++
        return count  
    }
}

const incremntFn = closure();
console.log(incremntFn())
console.log(incremntFn())
console.log(incremntFn())
console.log(incremntFn())