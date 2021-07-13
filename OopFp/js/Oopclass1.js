function 기계(skill1,skill2){
    this.q = skill1;
    this.w = skill2;
}

var nunu =  new 기계("consume","drop")
var garen = new 기계('strike','jump');


// ES6이후
class Hero {
    constructor(){
        this.q = skill1;
        this.w = skill2;
    }
}

