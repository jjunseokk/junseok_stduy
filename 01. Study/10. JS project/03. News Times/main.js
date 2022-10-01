// 메뉴 카테고리

let menus = document.querySelectorAll(".menus button");
let alink = document.querySelectorAll(".link");
console.log("menus", menus);
menus.forEach((menu) => menu.addEventListener("click", (event)=>getNewsByTopic(event)));
alink.forEach((link) => link.addEventListener("click", (event)=>getNewsByTopic(event)));


let searchButton = document.querySelector(".searchBtn");

// 각 함수에서 필요한 url을 만든다
let url;

// api 호출 함수를 부른다.
const getNews = async() =>{
    try{
        let header = new Headers({'x-api-key': 'kx9aI0Zn2_2HY3uZmdSK4wdY4vWO4dTyPEsBzcIVz5U'});

        let response = await fetch(url,{headers:header}); //ajax, http, fetch /*await은 이 일이 끝날때까지 기다려라 라는 뜻.*/
        let data = await response.json(); //json은 서버통신에서 많이 쓰이는 데이터 타입
        if(response.status == 200){
            if(data.total_hits ==0){
                throw new Error("검색된 결과 값이 없습니다.")
            }
            news = data.articles;
            console.log(news);
            render();
        } else{
            throw new Error(data.message);
        }
    }catch(error){
        errorRender(error.message);
    }
};

let news =[];
// api
// 새로운 뉴스 불러오기
const getLatestNews = async() =>{ //async와 await은 세트다.
    url =new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10`);
    getNews();
}
// 선택한 카테고리별 뉴스 불러오기
const getNewsByTopic = async (event) =>{
    let topic = event.target.textContent.toLowerCase();
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`);
    getNews();
};

// 버튼을 눌렀을 때 카테고리별 검색
const getNewsBykeyword = async() =>{
    //1. 검색 키워드 읽어오기
    let keyword = document.getElementById("search").value;
    
    //2. 이걸 가지고 url에 검색 키워드 붙이기
    url =new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);
    getNews();
};


// 뉴스 저장한 함수.
const render = () => {
    let newsHTML = ``;
    newsHTML = news.map(item=>{
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}" alt="" style="width:100%">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
                ${item.summary}
            </p>
            <div>
                ${item.rights}*${item.published_date}
            </div>
        </div>
    </div>`
    }).join(''); // join()은 배열을 스트링으로 바꿔주는 것

    document.getElementById("news-board").innerHTML = newsHTML;
};

const errorRender = (message) =>{
    let errorHTML = `<div class="alert alert-danger text-center">${message}</div>`;
    document.getElementById("news-board").innerHTML = errorHTML;
};

searchButton.addEventListener("click",getNewsBykeyword); //여기로 위치한 이유는 호이스팅 떄문이다.
getLatestNews();


// 제이쿼리
// 햄버거 박스 누를 때 메뉴바.
$(function(){
    $(".buggerBtn").on("click",function(){
        $(".sidenav").animate({
            left : "0px"
        },200)
    });

    $(".closebtn").on("click", function(){
        $(".sidenav").animate({
            left : "-350px"
        },200)
    })


// 검색 버튼 누를면 나오고 다시 한번 누르면 없어진다.
    $(".search-icon").on("click", function(){
        $(".search-area").toggleClass("search-area-off search-area-on");
    });

}); //전체 함수의 끝







// 자바스크립트의 기본원리
console.log(1);

setTimeout(()=>{console.log(2);},2000); //시간을 딜레이 하는 함수, 첫번 째 인자는 함수, 두번째 인자는 시간이다.
console.log(3);

// 이 결과가 1, 3 이 먼저 출력되고 2초뒤 2가 출력이 된다.
// 이러한 이유는 무엇일까?


// 자바스크립트에는 stack 이라는 것이 있다. (stack은 작업을 하기 위한 공간.)

// 자바스크립트는 stack이 딱 하나있어서 여러개를 처리 하지 못한다.
// 항상 모든 일을 순차적으로 처리한다. 이러한 방식을 동기적 프로그래밍이다.

// 대기실을 wep api 이라한다.

// 대기실에서 바로 스택에 주지 않고 queue라는 곳에 보낸다.

// queue라는 곳은 stack이 할일이 없다면 stack에게 데이터를 보낸다.