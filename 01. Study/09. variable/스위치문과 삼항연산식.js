// switch
let menu = 2;

// if(menu==1){
//     console.log("물건사기");
// } else if(menu==2){
//     console.log("잔고확인");
// } else if(menu==3){
//     console.log("히스토리확인");
// } else {
//     console.log("홈으로 돌아가기");
// }

switch (menu){
    case 1 : console.log("물건사기");
    break;

    case 2 : console.log("잔고확인");
    break;

    case 3 : console.log("히스토리확인");
    break;

    default : console.log("홈으로 돌아가기");
}

// if 문을 대체할 수 있는 것이 switch다. 
// 그럼 if문을 써야하나 switch문을 써야하나??? 
// switch문이 사용에 좀 더 제한이 있다. 사용할 수 있는 범위가 제한적이다. 
// switch같은 경우는 case 값이 딱 떨어질 때 즉 값이 하나일 때 사용한다.

// if문 대신 자주쓰는것

let sum = 1;

if(sum <= 3){
    console.log("범위안에 숫자입니다.");
} else {
    console.log("범위 밖의 숫자입니다.");
}
// 위 코드를 한줄로 쓸 수 있다, 그것이 바로 삼항 연산식이다.
// 조건?? true 일때 : flase 일때
// 삼항연산식을 쓰는 조건
// 1. 조건이 많지 않을때
// 2. 반환하고 싶은값이 딱 하나만 코드에 있을 때

let answer = sum <= 3? "범위안에 숫자입니다." : "범위 밖의 숫자입니다.";

console.log(answer);

// 삼항 연산식에 연산식을 더 붙여서 더 많은 조건도 표현이 가능하다.
let food = "고기";

if(food=="피자"){
    console.log("피자 좋아");
} else if(food=="햄버거"){
    console.log("햄버거 좋아");
} else{
    console.log("다 싫어");
}

// 위의 if문을 삼항연산식으로 표현한다면

let add = food=="피자"? "피자 좋아":food=="햄버거"? "햄버거 좋아":"다 싫어";

console.log(add);