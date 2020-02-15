/*let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};*/

// 위는 함수 표현식이다. 익명함수 부분을 애로우 펑션으로 바꾸시오
// 입력과 출력 사이에 =>(arrow) 삽입하고 function은 삭제
// 만일에 return 문이 한줄이면 {}와 return은 생략 가능
// 만일에 입력 파라메터가 없으면 () 는 생략 불가
// 만일에 파라메터가 한 개면 () 는 생략 가능 

let circleArea = (pi, r) => pi * r * r;
let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"