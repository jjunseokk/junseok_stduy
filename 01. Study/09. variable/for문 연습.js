
// 1 부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum = 0;
for(let i=1; i<=100; i++){
    sum += i;
}
console.log(sum);


// 1 부터 100까지 홀수만 출력
for(let i=0; i<=100; i++){
    if(i % 2 ==1){
        console.log(i);
    }
}

// 1부터 50까지 369결과를 프린트하자.
for(let i=1; i<=50; i++){
    let stringValue= i.toString();
    let result = "";

    for(let j=0; j <stringValue; j++){
        if(stringValue[j] =="3" || stringValue[j] =="6" || stringValue[j] =="9"){
            result+="짝";
        }
    }
    console.log(result.length>0? result:i);
}

// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오

let num = 17;
let isPrime = true;

if(num===1){
    isPrime = false;
}
for(let i=2; i<num; i++){
    if(num % i==0){
        isPrime=false;
    }
}
console.log(isPrime);