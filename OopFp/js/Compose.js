//arity




fn1(fn2(fn3(50)));
compose(fn1,fn2,fn3)(50); //인자를 함수로 받고 데이터 플로우 right - left 처리
pipe(fn3,fn2,fn1)(50); // compose의 반대 방향으로 데이터처리 left - right

const compose = (f,g)=>(data) => f(g(data));
const pipe = (f,g) => (data) => g(f(data));
const multiplyby3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const muliplyBy3AndAbsolute = compose(multiplyby3,makePositive);

