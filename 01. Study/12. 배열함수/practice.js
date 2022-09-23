let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];

// 1. map
// 모든 이름을 대문자로 바꾸어서 출력하시오.
let UpperName = names.map((item)=>{
    return item.toUpperCase();
});
console.log(UpperName);

// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
let lastName = names.map((item)=>{
    return item.split(" ")[0];
});
console.log(lastName);
// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let initialOnly = names.map((item)=>{
    let splitName = item.split(" ");
    let initial = "";
    splitName.forEach((nameItem)=>(initial += nameItem[0]));
    return initial;
});
console.log(initialOnly);
// 2. filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
let name_a =names.filter((item)=>{
    return item.includes("a");
});
console.log(name_a);
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let doubleName = names.filter((item)=>{
    let splitName = item.split("");
    return splitName.some((letter, index)=>letter == splitName[index+1]);
});
console.log(doubleName);
// 3. some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
let lengthName = names.some((item)=>{
    return item.length >= 20;
});
console.log(lengthName);

// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let name_p = names.some((item)=>{
    let splitName = item.split(" ");
    splitName.pop();
    return splitName.some((eachName)=>eachName.toLocaleLowerCase().includes("p"));
});
console.log(name_p);

// 4. every
// 모두의 전체 이름의 길이가 20자 이상인가?
console.log(names.every(item=>item.length>=20));

// 모두의 이름에 a 가 포함되어 있는가?
console.log(names.every(item=>item.includes("a")));

//5. find
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
console.log(names.find(item=>item.length>=20));

// 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
console.log(names.find(item=>item.split(" ").length>=3));


// 6. findIndex
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
console.log(names.findIndex(item=>item.length>=20));

// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
console.log(names.findIndex(item=>item.split(" ").length>=3));
