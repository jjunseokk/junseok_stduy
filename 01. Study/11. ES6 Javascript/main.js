// let name = "junseok";
// let age = 27;


// let person ={
//     name: "junseok",
//     age : 27
// }

// 원래 방법은 이렇게 했다면 es6는 다른방법을 쓴다.

// let person = {name, age} // 키값 그대로 넣어주고 싶다면 이방법을 써도된다.
// 하지만 예를 들어 안에 키 값을 바꿔주고 싶다면 옛날 방법을 써야한다.

// console.log(person);


// 객체를 분해하는 방법

// let bts ={
//     name : "방탄소년단",
//     num : 7
// }

// // 위와 아래는 서로 같은의미이다.

// // let nameValue = bts.name //키값을 다르게 주고싶다면 이방법을 써야한다.
// // let numValue = bts.num

// // let {name, num} = bts;

// console.log(bts);


// let name="junseok";

// let age = 27;

// // 옛날 방식
// console.log("제 이름은 "+ name+ " 입니다." + "제 나이는 " + age +" 입니다."); 

// // 현재방식
// console.log(`제 이름은 ${name} 입니다. 제 나이는 ${age} 입니다.`);

// 객체안에 있는 값을 따로 담고싶다면
// let person ={
//     name: "junseok",
//     age : 27,
//     cute : true
// }

// let {name,...restInfo} = person;
// console.log(name, restInfo);

// 배열

// 배열안에 있는 값을 따로 담고싶다면

// let array=[1, 2, 3];

// 옛날방법
// let a = array[0];
// let b = array[1];
// let c = array[2];

// console.log(a, b, c);

// 현재 방식
// let [a,b,c] = array;
// let [a,...rest] = array; //a를 뺀 나머지 값이 들어간다.

// console.log(rest);


// a, b, c를 하나로 붙인다.

// let a=[1,2];
// let b=[3,4];
// let c=[5,6];

// // let result = a.concat(b,c); //콘캣으로 a,b,c를 다 붙인다.
// let result = [...a,...b,...c]; //콘캣으로 a,b,c를 다 붙인다.

// console.log(result);


// 함수선언방식

// function foo (){ // 옛날 방식
//     console.log("hello");
// }

// let foo = ()=>{ //문장이 여러개일 때
//     console.log("hello");
//      return "haha";
// }


// // return
// let foo = ()=>"hahahahaha"; // 문장이 하나일때
// console.log(foo);


// 화살표 함수는 일반함수를 대체할 수 없다.
// 편하긴 하지만 옛날문법을 100% 대체할 수는 없다.
// 일반함수에는 있지만 화살표 함수에는 없는게 하나있다.
// 바로 this 이다.

// this

let age = 16;
let person = {
    name : "jjj",
    age : 20,
    getInfo:function(){
        console.log(this.age);//나 자신
    }
}

person.getInfo();
// 전역변수랑 객체안에랑 같으면 전역변수만 가져옴
// 그렇다면 객체안에 있는것은 어떻게 가져오냐 바로 this다.
// 화살표함수는 this가 없다. 스스로 this를 생성할 수 없다.
// this는 나 자신을 불러주는 객체