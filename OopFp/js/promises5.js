//Callback Queue - Task Queue
setTimeout(()=>{console.log(`1: is the lonelienst number`)},0)
setTimeout(()=>{console.log(`2: is the lonelienst number`)},10)

//2 Job Queue Microtask Queue
Promise.resolve('hi').then((data)=>console.log(`2 ${data}`));

//3
console.log(`3 is a crowd`)