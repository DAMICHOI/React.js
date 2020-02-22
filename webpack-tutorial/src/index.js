function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    /*
    Lodash 에서 _ 을 글로벌 변수로 사용
    [페이지 방식의 문제점]
    1. 글로벌 환경으로 실행되기 때문에 변수의 충돌 가능성이 있음
    2. 로딩 순서에 의존성이 있음
    3. 페이지가 바뀔때마다 이전페이지에서 로딩했던 동일한 javascript 파일이 대부분 다시 로딩되어져야 함
    위와 같은 문제점 때문에 모듈 방식을 사용하는 것이 좋음
    */
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component()); // DOM API