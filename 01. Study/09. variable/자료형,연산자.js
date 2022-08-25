

// 변수안에는 아무 값이나 넣을 수 있다.
// 변수안에 들어갈 타입은
// - string 타입 : 문자열(문장, 단어)""큰따옴표 또는 ''작은 따옴표 안에 들어간 데이터를 문자열이라고 한다.

let password = "pink";
password = "black";

// - 숫자 타입 : 큰 따옴표, 작은 따옴표에 안들어가 있는 숫자들을 숫자타입이라고 한다.
let id = 123;

// boolean 타입 : 논리연산에 쓰이는 데이터타입
let sd = true;
sd = sd > 2;
// || or 연산자 or 연산자는 한가지만 참이여도 참이다.
// && and 연산자 and 연산자는 둘다 참이여야 함이다.
sd = sd >= 2 || sd < 2;

console.log(sd);
console.log(password);

// String: 문자열 타입이라고도 한다. “” 큰따옴표나 ‘’ 작은따옴표 안에 들어가 있는 값을 string 타입이라고 함
// 숫자 : 숫자타입. 양수, 음수 소수 다 숫자 타입
// boolean : 논리연산에 많이 쓰이는 타입으로 true, false 단 두개의 값만 있다.
// 그 외에: 배열, 객체 등…

// 연산자➕➖✖➗
// 값들을 가지고 할수있는 다양한 연산자들이 있다. 영상에서 소개해주지 못한 연산자도 소개를 할 예정이니 집중하자!



// 증가연산
let a =1
a++ // a=a+1과같다 
console.log(a)// 2

//감소연산
let b =2 
b-- // b=b-1과 같다
console.log(b) // 1 

//단축된 연산자
let c =1
c+=3 // c=c+3을 줄여서 표현한 것이다
console.log(c)//4

let d = 3
d-=2 // d=d-2를 줄여서 표현한 것이다 
console.log(d)//1

// NOT 연산자 : 어떤값의 반대되는 값을 반환 true 면 false를, false면 true를 반환 
let f = true
console.log(!f) // false 

// 같다라는 표현은 ==  
let x = 2
let y =2 
console.log(x == y)// true

//다르다라는 표현은 != 
console.log(x != y)//false