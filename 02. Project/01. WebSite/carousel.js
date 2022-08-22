// document.querySelector('.btn2')을 지정하고 
// addEventListener('click' ,function() 클릭이 일어났을 때
// 안에 있는 함수를 실행

document.querySelector('.btn2').addEventListener('click' ,function(){
    document.querySelector('.slide_container').style.transform = 'translate(-33%)';
})

document.querySelector('.btn3').addEventListener('click' ,function(){
    document.querySelector('.slide_container').style.transform = 'translate(-66%)';
})

document.querySelector('.btn1').addEventListener('click' ,function(){
    document.querySelector('.slide_container').style.transform = 'translate(0%)';
})