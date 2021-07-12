//기본적인 캐릭터들의 기본 객체를  만들었습니다.
class Character{
    constructor(name,wepon){
        this.name = name;
        this.wepon = wepon;
    }
    attack(){
        return `atack with ${this.wepon}`;
    }
}

//Elf라는 객체는 Character의 기본 요소를 가져옵니다!. extends 확장햇습니다.
class Elf extends Character{
constructor(name,wepon,type){
    super(name,wepon)
    this.type = type;
}
}
//Oger또한 Character에서 extends 하여, makeFort라는 다른 공격을 가진 객체를 만들었습니다.
class Oger extends Character{
    constructor(name,wepon,color){
        super(name,wepon);
        this.color = color;        
    }
    makeFort(){
        return `strongest fort in the world made`;
    }
}

const dolby = new Elf(`Dolby`,`cloth`,'house');
console.log(dolby.attack());

const shrek = new Oger('shrek','club','green');
console.log(shrek.makeFort());

console.log(Oger.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Oger));