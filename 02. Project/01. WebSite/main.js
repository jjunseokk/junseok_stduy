// 텍스트가 스크롤할때마다 움직이게 하는것
let subText = document.querySelector(".text");

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY", value);

    if(value<360){
        subText.style.animation="reverse 1s ease-out forwards";
    } else {
        subText.style.animation="move-text 1s ease-in";
    }
});

// 햄버거 박스를 누를 때 열리고 닫히는 토글버튼
const toggleBtn = document.querySelector('.navbar_togleBtn');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
