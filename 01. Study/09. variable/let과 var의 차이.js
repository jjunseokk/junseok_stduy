// let과 var의 차이

// var의 문제점
// 전역변수와 지역변수의 개념이 확실치 않다.
// 전역변수 : 블락 밖에서 선언을 한 어디서든 쓰일 수 있는 변수
// 지역변수 : 블락{} 안에서 선언된 변수, 블락안에서만 쓸 수 있다.
// var 같은 경우에는 함수만 지역변수로 호이스팅이 되고 나머지는 전역변수로 다 올려버린다.
// 변수의 이름이 중복이 되어도 가능하다.

// let
// 변수의 이름이 중복이 불가능하다.

// 자바스크립트의 호이스팅
// 개념 : 코드가 실행 되기전에 자바스크립트가 선언해둔 변수가 뭐가 있는지 조사를 한다. 선언된 변수와 함수를 가져가서 메모리에 기억을 해둔다.
// 그러다가 누군가 a라는 변수를 불러 a를 불러내는 개념이다. 즉 안에있는 변수들을 범위의 최 상단으로 끌어올리는 것

console.log(a);
var a = 1;

var a = 2;
console.log(a);
