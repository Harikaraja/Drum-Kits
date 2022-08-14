let aud1 = new Audio('sound1.wav');
let aud2 = new Audio('aud2.wav');
let aud3 = new Audio('aud3.wav');
let aud4 = new Audio('aud4.wav');
let aud5 = new Audio('aud51.wav');
let first=document.getElementById('first');
first.addEventListener('click',func1);
function func1(){
   aud1.play();
}
let second=document.getElementById('second');
second.addEventListener('click',func2);
function func2(){
    aud2.play();
}
let third=document.getElementById('third');
third.addEventListener('click',func3);
function func3(){
    aud3.play();
}
let forth=document.getElementById('forth');
forth.addEventListener('click',func4);
function func4(){
    aud4.play();
}
let fifth=document.getElementById('fifth');
fifth.addEventListener('click',func5);
function func5(){
    aud5.play();
}