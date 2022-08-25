// 배열

// 여러개의 데이터를 담을 때 100개의 데이터가 있다고 가정하면 이 100개의 데이터의 변수를 지정해 줄 것이냐??
// 아니다. 하나의 변수로 여러개의 데이터를 담을 때 쓰는 것이 바로 배열이다.

// let fruit = "banana";
// let fruit2 = "apple";
// let fruit3 = "mango";
// let fruit4 = "grape";

// 관련있는 데이터들을 하나로 묶어서 하나의 변수 아래에 저장하는 것
let fruit = ["banana", "apple", "mango", "grape"];
// let fruit = [0, 1, 2, 3] 배열의 아이템이 들어갈 때 각 번호가 지정된다. 이것을 인덱스라고 부른다. 인덱스는 0부터 시작한다.
console.log(fruit);
console.log(fruit[0]); // 0번째에 있는 것을 출력한다. banana

fruit[0] = "cherry";
console.log(fruit);

fruit[3] = "tomato";
console.log(fruit);

// pop() : 마지막에 있는 아이템을 뺌
fruit.pop();
console.log(fruit);

// push : 마지막에 아이템을 넣음
fruit.push("pineapple");
console.log(fruit);

// includes : ~을 포함하고 있어?
console.log(fruit.includes("apple"));

// indexOf : 인덱스 번호를 알고싶을때
console.log(fruit.indexOf("apple"));

// slice : 배열 아이템을 잘라내고 역할(시작점, 끝점-끝점 미포함)

// console.log(fruit.slice(1));
// slice는 기존의 배열을 건들이지 않고 새로운 배열을 만드는 것이다.
// 그래서 console.log를 다음과 같이 작성하는 것이다.
// 예를 들어 splice처럼 값을 출력하고 싶으면 변수를 만들어 선언해야한다.
console.log(fruit.slice(1,3));

// splice : 시작점으로 부터 몇개의 아이템을 제거하고 싶은지
// splice는 기존의 배열이 잘려서 console.log를 다음과 같이 작성하는 것이다.
fruit.splice(2,2); //(시작점, 개수)
console.log(fruit)