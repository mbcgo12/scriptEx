//Memory effcient
// function heavyDuty(index){
//     const bigArray = new Array(7000).fill('★')
//     console.log(`created! index:${index}`)
//     return console.log(bigArray[index])
// }

// function heavyDuty2(index){
//     const bigArray = new Array(7000).fill('★')
//     console.log(`created! Again:${index}`)
//     return function(index){
//         return bigArray[index];
//     }
// }

//Encapsulation

// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalpeaceTime = () => 
//         console.log(timeWithoutDestruction);
//         timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return '★';        
//     }
//     setInterval(passTime,1000)
//     return{
//         launch:launch,
//         totalpeaceTime:totalpeaceTime
//     }
// }

// const ohno = makeNuclearButton();
// ohno.totalpeaceTime();

// let view;
// function initialize(){
//     view = '^_^';
//     console.log(`view has benn set!`);
// }

// initialize();
// initialize();
// initialize();
// console.log(view);

const array = [1,2,3,4];
for(let i=0; i<array.length; i++){
    setTimeout(function(){
        console.log(`i am at index ${i}`)
    },3000)        
}    