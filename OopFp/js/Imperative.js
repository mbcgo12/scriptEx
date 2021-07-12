//Immutability

const obj = {name: 'Andrei'}

function clone(obj){
    return {...obj};
}

function updateName(obj){
    const obj2 = clone(obj);
    obj2.name = 'nana'
    return obj2
}
updateName(obj);
console.log(obj);