// Basic function

// function letAdamLogin(){
//     let array= [];
//     for (let i=0; i<100000; i++){
//         array.push(i)
//     }
//     return console.log('access Granted to Adam') 
// }

// letAdamLogin();

// //function (a,b)
// function userLogin(user){
//     let array= [];
//     for (let i=0; i<100000; i++){
//         array.push(i)
//     }
//     return console.log(`access Granted to ${user}`) 
// }

// userLogin('Keely');




// const giveAccessTo = (name)=> console.log(`access Granted to ${name}`)

// function userLogin(user){   
//     return giveAccessTo(user);
// }

// function userLogin(admin){
//     let array= [];
//     for (let i=0; i<500000; i++){
//         array.push(i)
//     }
//     return giveAccessTo(admin);
// }




const giveAccessTo = (name)=> console.log(`access Granted to ${name}`)
const failuser = (name)=> console.log(`not dont'your join access ${name} Soory`)

function authenticate(verify){
    let array= [];
    for (let i=0; i<verify; i++){
        array.push(i)
    }
    return true;
}

function letPerson(person, fn){
    if(person.level ==='admin'){
        fn(50000)        
    }else if(person.level === 'user'){
        fn(10000)        
    }else{
        fn(500)
        return failuser(person.name)
    }
    return giveAccessTo(person.name)
}

letPerson({level:'admin', name:'Time'},authenticate)