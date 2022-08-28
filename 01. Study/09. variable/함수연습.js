// "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
// function greet(Name){
//     console.log("안녕 내 이름은 제시카야");
// }

// 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
// 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
function greet(Name){
    console.log("안녕 내 이름은",Name,"야");
    return Name;
}
const Name=greet("제시카");
console.log("안녕 내 이름은",Name,"이야");

// 3개의 인자를 받고 첫번째 인자는 년도에 해당하는 숫자, 두번째 인자는 월에 해당하는 숫자, 세번째 인자는 일에 해당하는 숫자이다.
// 년도인자만 받을 경우 -> "1234년"과 같은 문자열을 리턴
// 년도, 월 인자를 받을 경우 -> "1234년 5월" 과 같은 문자열 리턴
// 년도, 월, 일 인자를 전부 받을 경우 ->"1234/5/6"과 같은 형식의 문자열을 리턴해주세요
function meetAt(year, month, day){ //먼저 함수를 만든다. 이 함수는 총 매개변수를 3개를 받는다.
    let todayYear = year;
    let todayMonth = month;
    let todayDay = day;

    if(todayDay){
        return `${todayYear}/${todayMonth}/${todayDay}`;
    }
    if(todayMonth){
        return `${todayYear}년${todayMonth}월`;
    }
    if(todayYear){
        return `${todayYear}년`;
    }
    // String 문자열 안에 동적인 값을 넣어주고 싶을 때 ${동적인값}정적인문장을 넣어주면 된다. 
    // 그리고 이 문장을 감싸는것은 ""큰따옴표나 ''작은 따옴표가 아닌 `` 백틱이다 (~키보드과 함께 있다)
}
console.log(meetAt(2022)) //반환해주는 값을 출력을 할 것이다.




// findSmallestElement 함수를 구현해 주세요.
// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.
// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열
function findSmallestElement(arr){
    let result = arr[0];
    if(arr.length == 0){
        return 0;
    } // arr가 비어있으면 0을 리턴한다.

    for(let i=1; i<arr.length; i++){// i가 1부터 arr.length까지 i를 하나씩 증가해라
        if(result > arr[i]){ //result 값이 arr에 i번째와 비교 했을때 result값이 더 크면, result에 arr에 i번째로 할당한다.
            result = arr[i]; 
        } 
    }
    return result;
}
let smallestNumber = findSmallestElement([100,200,3,5,2,1]);
console.log(smallestNumber);

// 



// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
// 출력예 )
// 12300인 경우
// 50000 X 0
// 10000 X 1 //몫이 1 나오고 나머지가 2300
// 5000  X 0
// 1000 X 2 //몫이 2 나오고 나머지가 300
// 500 X 0
// 100 X 3 // 몫이 3 나오고 나머지가 0
// 하나하나 나누
let unit = [50000, 10000, 5000, 1000, 500, 100]; //돈 단위를 지정하는 배열
function changeCalculate(money){ 
    for(let i=0; i<unit.length; i++){ //i는 0부터 i보다 unit.lehgth가 클때까지 i를 증가한다.
        let num = Math.floor(money/unit[i]);// Math.floor 는 소수값이 존재할 때 소수값을 버리는 역할을 하는 함수
                                            // 돈을 배열을 하나씩 나눈다.
        console.log(unit[i]+"X"+num);
        money = money - (unit[i]*num); // 이 문장이 없으면 money라는 값인 12300을 계속 배열 i번째로 계속 나누게 된다.
    }
}
changeCalculate(12300);