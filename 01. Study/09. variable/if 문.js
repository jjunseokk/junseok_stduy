// if문

// if(조건문){
//     조건이 충족하면 할일들
// }

let age = 20;
let licence = false;

if(age > 20) {
    console.log("운전이 가능합니다."); //필수
} else if(age >=18) {
    console.log("오토바이 운전이 가능합니다.");//선택적
} else {
    console.log("운전이 불가능합니다.");//선택적
}

// 범위가 작은 것부터 18~20
// 뭐뭐 사이에 할땐 무조건 && and연산자
if(18 <= age && age < 20) {
    console.log("오토바이 운전이 가능합니다."); //필수
} else if(age > 20) {
    console.log("운전이 가능합니다.");//선택적
} else {
    console.log("운전이 불가능합니다.");//선택적
}

// if문은 어떤 조건에서 참이 결정이 나버리면 if문이 종료가 된다.
// 예를 들어 첫 번째 문장과 두번째 문장이 참이다. 이럴경우는 첫 번째 문장에서 참이 결정되어 버렸기 때문에, if문이 종료가된다.
// if문을 세울 때 주의해야 하는 것은, 조건들의 범위가 작은것 부터 큰것 순으로 나열하는 것이 좋다.
if(age >= 18) {
    console.log("운전이 가능합니다."); //필수
} else if(age > 20) {
    console.log("오토바이 운전이 가능합니다.");//선택적
} else {
    console.log("운전이 불가능합니다.");//선택적
}

// 조건문안에 조건문
// 예를 들어 20살이야? 운전면허 있어? 그럼 운전가능!
if(age >= 20){
    if(licence == true){
        console.log("운전이 가능합니다.");
    } else{
        console.log("면허를 따세요")
    }
} else {
    console.log("운전이 불가능합니다.");
}