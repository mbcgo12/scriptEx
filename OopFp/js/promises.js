// const promise = new Promise((resolve,reject)=>{
//     if(true){
//         resolve(`stuff Worked`);
//     }else{
//         reject(`error, it broke`);
//     }
// })

// promise
// .then(result => result + `!`)
// .then(result2 =>{
//     console.log(result2)
// })


const urls =[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url=>{
    return fetch(url).then(resp=>resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
})