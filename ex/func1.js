

// 아래는 함수 선언문(function definition)이다. 함수 표현식으로 바꾸시오.
// 함수 선언문과 함수 표현식의 차이점은 무엇인가? 표현식으로 바꾸면 에러가 나는가 안나는가?
// 함수 표현식
/*
myName("Yan", "Fan");
function myName(first, last) {
    console.log(first + last);
}*/

// 함수 선언문
/*var myName = function(first, last) {
    console.log(first + last);
}
myName("Yan", "Fan");*/

// Arrow Function
var myName = (first, last) => console.log(first+last);
myName("Yan", "Fan");