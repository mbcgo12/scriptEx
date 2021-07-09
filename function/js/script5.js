// function lastYear(){
//     YearMinus = aaa-1;
//     return YearMinus;
// }


// var aaa = new Date().getFullYear().lastYear();


// console.log(lastYear)



// 정답
// Date.prototype.lastYear = function(){
//     return this.getFullYear() -1;
// }

// const MinusYear = new Date().lastYear();

// console.log(MinusYear)

Array.prototype.map = function(){
    let arr = [];
    for(let i=0; i<this.length; i++){
        arr.push(this[i]+'!!!map!!!')        
    }
    return arr
}

console.log([1,2,3].map())