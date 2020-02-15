// 생성자 함수는 new 키워드를 통해서 호출하고 json 객체를 리턴받는다.
// (생성자 함수는 암묵적으로 첫 글자가 대문자이어야 함)
// 자기자신을 가르키는 this = {} 생성
// 리턴문이 없으면 혹은 리턴문이 객체가 아니면 this 리턴
function Person() {
    // this = {};
    this.arms = 2;
    this.legs = 2;
    return 1;
}

// arms의 출력 결과는 무엇인가?
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는?
console.log(new Person());
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가?
//console.log(arms);