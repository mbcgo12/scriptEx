// class User2{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     showName(){
//         console.log(`my name is ${this.name}`);
//     }
// }

// const tom = new User2('tom','14') 

//extends

class Car{
    constructor(color){
        this.color = color;
        this.wheels =4;
    }
    drive(){
        console.log(`drive..`)
    }
    stop(){
        console.log(`stop!!!!`)
    }
}

class Bmw extends Car{
    park(){
        console.log('park');
    }
}

const z4 = new Bmw('blue');