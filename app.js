/*
<Typescript>
CreateElement 속성
1. type      - 변수명 : 타입명
2. props?    - json 혹은 null   -> null을 빼고 children을 넣으면 children이 props로 인식되므로 null 작성해줘야 함
3. ...children  - 배열로 들어감(Element, react, node가 들어올 수 있음) -> 나머지 연산자이기 때문에 안들어와도 됨
** ? : 파라미터가 들어와도 되고 안들어와도 됨
** ... : 나머지 연산자
*/

/*
es5 (ES5.1)
- var 하나로 다 됨
- var 변수의 문제점은 scope가 없음. 어디에서 사용하더라도 global 변수가 됨

es6 (ECMA 2015)
const : 값을 변경하고 싶지 않을 때
let : 값을 계속 변경하고 싶을 때
*/

/*
* <Create Element 문법>
const title = React.createElement(  // React Element (Create React가 return하는 결과물)
    'h1', // Node Element
    {id: 'main-title', title: 'this is a title'},   // Attribute
    'My First React Element'    // Children Node
);

const desc = React.createElement(
    'p',
    null,
    'This is Description'
)

const header = React.createElement(
    'header',
    null,
    title, desc
)

ReactDOM.render(
    header,  // React Element
    document.getElementById('root') // Element Id (React Element를 rendering)
);
*/

/*
* JSX 문법
* createElement() => JSX로의 변화 및 JSX 규칙
* 첫번째 파라메터 => 태그명으로 변경
* 두번째 파라메터 => 태그의 속성명으로 변경
* 세번째 이후 파라메터 => 모두 자식 노드로 변경
* class, for 의 속성명 => className, htmlFor로 변경
* 자바스크립트 표현식 => {} 를 사용
* 반드시 닫는 태그가 있어야 한다.
*

const titleId = 'main-title';
const titleStr = 'This is a title';
const title = <h1 id={titleId} title={titleStr}>My First React Element!!</h1>;
const desc = <p className="h1">This is Description</p>;
const header = (
    <header>
        {title}
        {desc}
    </header>
);

ReactDOM.render(
    header,  // React Element
    document.getElementById('root') // Element Id (React Element를 rendering)
);
 */

/*
function component 규칙
1. 첫글자는 대문자로 작성해야 한다.
2. React Element를 return 해야 한다.
** selector.class > child selector.class + tab key
   => 자동으로 변환
 */


/*
1. function Definition
2. function Expression
3. Arrow function
** return 문이 한개이면 {} 와 return 생략 가능
*/

// 목업 데이터 (Test data)
// key : react 성능향상을 위해서 사용 (parameter 로 안넘어감)
const players = [
    {name: 'LDK', score: 30, id: 1},
    {name: 'HONG', score: 40, id: 2},
    {name: 'KIM', score: 50, id: 3},
    {name: 'PARK', score: 60, id: 4},
];

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="h1">{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}


const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>
            <Counter score={props.score}/>
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

/*
"" : String
{} : Integer
1. component 호출
2. 속성을 json 으로 넘긴다(props)

** map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 *새로운* 배열을 *반환*한다.
*/
const App = (props) => {
    console.log(props)
    return (
        <div className="scoreboard">
            <Header title="My Scoreboard" totalPlayers={props.initialPlayers.length}/>
            {/*
            <Player name="LDK" socre={35}/>
            <Player name="PARK" socre={45}/>
            <Player name="HONG" socre={55}/>
            <Player name="KIM" socre={65}/>
            */}
            {props.initialPlayers.map(player => (
                <Player name={player.name} score={player.score} key={player.id}/>
            ))}
        </div>
    );
}

ReactDOM.render(<App initialPlayers={players}></App>, document.getElementById('root'));