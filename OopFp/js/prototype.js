const basicSkill = {
    jump : true,
    attack(){
        if(this.wepon === 'knife'){
            console.log(`your attack -50!!`)
        }
        else if(this.wepon === 'stick'){
            console.log(`your ${this.wepon} attack -20!!!!`)
        }
        else{
            console.log(`your not wepon -5..`)
        }
    }
}

const user1 = {
    name: 'jhon',
    age : 13,    
    wepon: 'knife',  
}

const user2 = {
    name: 'mike',
    age : 24,         
}

const user3 = {
    name: 'jin',
    age : 35,
    wepon : 'stick'
}

user1.__proto__=basicSkill;
user2.__proto__=basicSkill;
user3.__proto__=basicSkill;


//계속 해서 상속해서 사용하는 것을, 프로토 타입체인이라 합니다.