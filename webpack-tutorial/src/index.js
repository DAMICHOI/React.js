//CommonJS 스펙의 모듈을 가져오는 방법 : require
const _ = require('lodash');
// es6 named import는 ()안에 동일한 이름
// circle 이면 먼저 circle.js 찾고 없으면 circle 폴더 안에 index.js를 찾는다.
import {area, circumference} from './js/circle';
// es6 default import 는 {}가 없고 이름을 마음대로 바꿀 수 있다.
import volume from './js/cube';

import './style.css';
import './hello.scss';

/*
function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work

    // Lodash 에서 _ 을 글로벌 변수로 사용
    // [페이지 방식의 문제점]
    // 1. 글로벌 환경으로 실행되기 때문에 변수의 충돌 가능성이 있음
    // 2. 로딩 순서에 의존성이 있음
    // 3. 페이지가 바뀔때마다 이전페이지에서 로딩했던 동일한 javascript 파일이 대부분 다시 로딩되어져야 함
    // 위와 같은 문제점 때문에 모듈 방식을 사용하는 것이 좋음

    element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

    return element;
}
*/

// arrow function
const component = () => {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

    return element;
}

console.log('area: ', area(5));
console.log('cir: ', circumference(5))
console.log('volume: ', volume(5))

document.body.appendChild(component()); // DOM API