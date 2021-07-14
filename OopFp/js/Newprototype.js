// const car ={
//     wheels : 4,
//     drive(){
//         console.log(`drive..`);
//     },
// };

const x5 = new Bmw(`red`);
x5.__proto__=car;

Bmw.prototype.wheels =4;
Bmw.prototype.drive = function(){
    console.log(`drive..`)
}


const Bmw = function(color){
    this.color = color;    
};

