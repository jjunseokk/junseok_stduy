// 객체
// object
// 객체가 필요한 이유
// 예를 들어 병원에서 환자정보를 찾을 때 환자의 이름만 가지고 찾기가 어렵다. 그 환자의 나이, 혈액형, 등등 정보가 필요하다.
// 즉, 한 데이터의 많은 정보가 필요할 때 그것을 표현하는 것이 object다.

// 사용법
let patient ={
    name : "junseok", // 키값 : 값
    age : 27,
    disease : "Cold"
} //객체는 {} 표기한다.

console.log(patient);
console.log(patient.name);
console.log(patient["age"]);

patient.name = "jk";
patient.age = "25";
console.log(patient);

// 객체를 배열안에 넣으면 어떤 모양이 되냐
let patientList =[{name:"jnseok", age:13},{name:"jk", age :25},{name:"jun", age:40}];
console.log(patientList);
console.log("첫번째 환자는 :", patientList[0]);
console.log("첫번째 환자의 나이는?:", patientList[0].age);
console.log("첫번째 환자의 나이는?:", patientList[0]["age"]);
console.log("두번째 환자의 이름?:", patientList[1].name);

let user = {
    name: "Coding Noona",
    age: 22,
    getName : function(){
        return "My name i "+this.name
    }
  }; // 객체 정의법
  
  console.log(user.name) // 객체에서 값 가져오는 법 1
  console.log(user['name']) // 객체에서 값 가져오는 법 2
  
  user.age = 40 // 객체에 특정 키 값을 바꾸는법 1
  user['age']=50 // 객체 특정 키 값을 바꾸는법 2
  
  console.log(user.getName()) // 객체에 함수 호출 