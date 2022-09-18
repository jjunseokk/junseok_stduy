// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// delete 버튼을 누르면 할일이 삭제된다.
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다.
// 1. check 버튼을 클릭하는 순간 true -> false
// 2. true 이면 끝난걸로 간주하고 밑줄보여주기
// 3. false이면 안끝난걸로 간주하고 그대로
// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴.


let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let underLine = document.getElementById("under-line");
let taskList = [];
let filterList =[];
let mode="all";

addButton.addEventListener("click", addTask);

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(event){
        filter(event)
    });
}
console.log(tabs);

function addTask(){
    let task={
        id:randomIDGenerate(),
        taskContent:taskInput.value,
        isComplete:false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let list=[];
    if(mode=="all"){
        list=taskList;
    } else if(mode == "ongoing" || mode=="done"){
        list=filterList;
    }

    let resultHtml ='';
    for(let i=0; i<list.length; i++){
        if(list[i].isComplete==true){
            resultHtml+=`<div class="task">
            <div class="task-done textStyle">${list[i].taskContent}</div>
            <div class="btnArea">
                <button class="grayBtn" onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-arrow-rotate-left"></i></button>
                <button class="redBtn" onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`;
        }else{
            resultHtml += `<div class="task">
            <div class="textStyle">${list[i].taskContent}</div>
            <div class="btnArea">
                <button class="greenBtn" onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
                <button class="redBtn" onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`
        }
    }
    document.getElementById("task-board").innerHTML = resultHtml;
}

// 체크버튼 클릭
function toggleComplete(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id==id){
            taskList[i].isComplete=!taskList[i].isComplete; // !를 쓰는순간 반대값이 나온다.
            break;
        }
    }
    render();
    console.log(taskList);
}


// 삭제버튼
function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id==id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
}

function filter(event){
    mode=event.target.id
    filterList = [];

    // 하단 바..
    underLine.style.transition="1s";
    underLine.style.width = event.target.offsetWidth + "px";
    underLine.style.left = event.target.offsetLeft + "px";
    underLine.style.top =
      event.target.offsetTop + (event.target.offsetHeight - 4) + "px";
    // 하단 바 끝.
    
    if(mode=="all"){
        render();
    } else if(mode=="ongoing"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete==false){
                filterList.push(taskList[i]);
            }
        }
        render();

    } else if(mode =="done"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete==true){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}