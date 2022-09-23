// for문 아직도 쓰니?
// for문은 배열이랑 많이 쓰인다.



// 배열함수
let names = ["Leo",
"Lio",
"Lee",
"Luna"
];

for(let i=0; i<names.length; i++){
    console.log("for : ",names[i]);
}

function printName(item){
    console.log("forEach : ",item); //이 item을 누가주느냐 바로 forEach()가 알아서 준다.
}

// names.forEach(함수) = 반환해주는 값이 없다.
names.forEach(printName);// forEach가 알아서 회전을 하면서 매번 배열의 아이템을 하나씩 넘긴다.

// 익명함수
names.forEach(function(item){
    console.log(item); //익명함수는 불필요하게 메모리 차지 안하고 사용되고 사라짐
});

// 익명함수(ES6)
names.forEach((item)=>{
    console.log(item);
});

// 배열에 인덱스 번호도 넘겨준다.
names.forEach((item, index)=>{
    console.log(item, index);
});




// map 함수 = map 같은 경우에는 배열이 들어있다. 반드시 배열을 반환한다.
let date = names.map((item)=>{
    return item; // 어떤 것을 리턴할지는 여기서 정한다.
});
console.log(date);
// 언제 많이 쓰냐? array안에 객체들이 있을 때 나는 name만 모아서 프린트 하고싶다면

let ceoList=[{name:"rina", age:23, ceo:true},
{name:"park", age:40, ceo:true},
{name:"kim", age:45, ceo:false}
]

let ceoDate = ceoList.map((item)=>{ //이렇게 작성하면 배열에 name만 가져와
    return item.name;   //item에 네임만 리턴시키면 된다.
});
console.log(ceoDate);



// filter = 조건을 넣고 조건에 대해 참인 것만 반환됨

let ceoDate2 = ceoList.filter((item)=>{ 
    return item.age==23;
});
console.log(ceoDate2);

let ceoDate3 = names.filter((item)=>{ 
    return item.startsWith("L"); //첫글자가 L로 시작하는 것 다 필터링 해줘.
});
console.log(ceoDate3);




//some = 몇몇 이런뜻, 네임즈에 L로 시작하는 아이템이 있어? 물어보고 
// true인지 false 인지 알려준다. 즉 조건에 만족하는게 있다면 true 없다면 false이다.
let ceoDate4 = names.some((item)=>{ 
    return item.startsWith("L"); 
});
console.log("L로 시작하는 : ",ceoDate4);




// every = 모두의 이름이 L로 시작해?
// 모든 조건이 참일 때 true고 아니면 false이다.

let ceoDate5 = names.every((item)=>{ 
    return item.startsWith("L"); 
});
console.log(ceoDate5);



// find = 첫번째로 찾은 하나만 반환.

let ceoDate6 = names.find((item)=>{ 
    return item.startsWith("L"); 
});
console.log(ceoDate6);




// findIndex = 인덱스 번호를 찾아준다.
let ceoDate7 = names.findIndex((item)=>{ 
    return item.startsWith("Luna"); 
});
console.log(ceoDate7);