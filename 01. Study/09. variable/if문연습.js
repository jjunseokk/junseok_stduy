
let get = 0;

if(get > 0){
    console.log("양수입니다.");
} else if (get < 0) {
    console.log("음수입니다.");
} else{
    console.log("0입니다.")
}

// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

let score = 89;

if(score <= 100 && score >=90){
    console.log("A");
} else if(score <= 89 && score >=80){
    console.log("B");
} else if(score <= 79 && score >=70){
    console.log("C");
} else if(score <= 69 && score >=60){
    console.log("D");
} else if(score <= 59 && score >=0) {
    console.log("F"); 
} else {
    console.log("잘못된 범위의 점수입니다.")
}


let skills = ["HTML","CSS","Javascript","React"];

if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격");
} else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비");
} else {
    console.log("탈락");
}
