// function showName(name){
//     console.log(name);
// }

// showName('mike');
// showName('mike','tom'); 


    // *나머지 매개변수
    // *전달 받은 모든 수를 더해야 합니다.
    // function add(...numes){
    //     let result = 0;
    //     numes.forEach((num)=>(result+=num))
    //     console.log(result)
    // }

    // add(1,2,3)
    // add(1,2,3,4,5,6,7,8,9,10)

    // *나머지 매개변수
    // *user 객체를 만들어 주는 생성자 함수를 만듭니다.
    // function User(name,age,...skill){
    //     this.name = name;
    //     this.age = age;
    //     this.skill = skill
    // }
    // const user1 = new User('mike',30,'html','css')
    // const user2 = new User('jhone',25,'JS')
    // const user3 = new User('Jane',10,'html','css','js','database')

    // console.log(user1)
    // console.log(user2)
    // console.log(user3)

    // 전개구문
    // arr1을 [4,5,6,1,2,3]으로
    // let arr1 = [1,2,3];
    // let arr2 = [4,5,6];

    // arr1 = [...arr2,...arr1];

    // console.log(arr1);