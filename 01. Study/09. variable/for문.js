// 반복문 for문 while문

// 첫번째 exmple
for(let i = 0; i <= 10; i++){
    if(i%2==0){
        console.log(i+"짝수입니다.");
    }
}
// 두번째 exmple
for(let i = 0; i <= 10; i+=2){
        console.log(i+"짝수입니다.");
}

// 구구단 만들기
for(let i=2; i<=9; i++){
    for(let j=1; j <=9; j++){
        console.log(i+"x"+j+"=" + i*j);
    }
}


// // while 문
// while(buttonclick==true){
//     console.log("While 문 실행");
// }

// for문이랑 while문 차이
// for문은 정확히 어디부터 어디까지 범위가 정확히 알때
// while문은 정확히 언제부터 언제까지라는 범위를 셀 수 없을 때 예를 들어 어떤상태일때 계속해줘.

// for문은 배열이랑 많이 쓰인다.

let fruit = ["banana", "apple", "mango", "grape"];

for(let i = 0; i<fruit.length; i++){
    console.log(fruit[i]);
}


let obj = {
    name : "이순신",
    age : 20
  };

  for (var i in obj) {
    console.log(i + "<br>");
  }