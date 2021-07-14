var _promise = function(param){
    return new Promise(function(resolve,reject){

        window.setTimeout(function(){

            if(param){
                resolve(`해결 완료`);
            }

            else{
                reject(Eroor(`실패`));
            }
        },3000)
    })
}

//promis 실행
_promise(true)
    .then(function(text){
        console.log(text)
    },function(error){
        //실패 시,
        console.log(error);
    });
