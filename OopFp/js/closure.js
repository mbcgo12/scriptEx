function makeAdder(x){
    return function(y){
        return x+y;
    }
}
//함수와 렉시컬 환경의 조합, 함수가 생성될 당시의 외부 변수를 기억합니다
//생성 이후에도 접근이 가능합니다.
const add3 = makeAdder(3);
console.log(add3(2)); //5

const add10 = makeAdder(10);
console.log(add10(5)); //15
console.log(add3(1)); //4