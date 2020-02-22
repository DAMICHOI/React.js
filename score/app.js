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
/*
const players = [
    {name: 'LDK', score: 30, id: 1},
    {name: 'HONG', score: 40, id: 2},
    {name: 'KIM', score: 50, id: 3},
    {name: 'PARK', score: 60, id: 4},
];
*/

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
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    );
}

// class가 React.Component 를 상속받는다.
// (부모가 갖고있는 모든 render method 를 사용할 수 있다.)
// react element 를 return 한다.
class Counter extends React.Component {
    // 클래스 바로 아래에 선언되는 변수는 속성이 된다.
    // var, const, let 사용하지 않아도 된다.

    // state = {
    //     score: 0
    // }

    constructor() {
        // 상속 받을 경우 super 클래스로 부모의 생성자를 호출하여, 부모로부터 물려받은 모든 속성을 초기화
        super();
        this.state = {  // class에서 사용하는 this는 자기 자신을 나타내는 this임.
            score: 0
        }
        //this.handleChange.bind(this);
    }


    /*
    plus() {
        // this.state.score += 1; 값만 변경
        // 값을 변경하고 UI도 렌더링 하려면 반드시 setState로 변경
        this.setState({score: this.state.score + 1});
    }

    minus() {
        // this.state.score += 1; 값만 변경
        // 값을 변경하고 UI도 렌더링 하려면 반드시 setState로 변경
        this.setState({score: this.state.score - 1});
    }
    */

    handleChange = (delta) => {
        //console.log('handleChange');
        // this.state.score += 1; 값만 변경
        // 값을 변경하고 UI도 렌더링 하려면 반드시 setState로 변경.
        console.log(this);  // this : arrow function에서의 this는 lexical this가 된다.
        this.setState(prevState => ({score: prevState.score + delta})); // 비동기로 동작
    }

    // 이벤트 핸들러 오른쪽은 반드시 함수 선언문이 와야 한다.
    render() {
        return (
            /*
            <div className="counter">
                <button className="counter-action decrement" onClick={this.minus.bind(this)}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.plus.bind(this)}> + </button>
            </div>
             */
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.handleChange(-1)}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.handleChange(1)}> + </button>
            </div>
        );
        // onclick 이벤트에는
        //1.함수 선언문이 나와야한다.
        //2.인자를 넘겨줘야 한다.
    }
}
/*const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}*/

/*
"" : String
{} : Integer
1. component 호출
2. 속성을 json 으로 넘긴다(props)

** map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 *새로운* 배열을 *반환*한다.

const App = (props) => {
    console.log(props)
    return (
        <div className="scoreboard">
            <Header title="My Scoreboard" totalPlayers={props.initialPlayers.length}/>
            // {
            // <Player name="LDK" socre={35}/>
            // <Player name="PARK" socre={45}/>
            // <Player name="HONG" socre={55}/>
            // <Player name="KIM" socre={65}/>
            // }
            {props.initialPlayers.map(player => (
                <Player name={player.name} score={player.score} key={player.id}/>
            ))}
        </div>
    );
}

ReactDOM.render(<App initialPlayers={players}></App>, document.getElementById('root'));
*/

class App extends React.Component{
    state = {
        players: [
            {name: 'LDK', id: 1},
            {name: 'HONG', id: 2},
            {name: 'KIM', id: 3},
            {name: 'PARK', id: 4}
        ]
    }

    handleRemove = (id) => {
        console.log('handleRemove', id)
        this.setState(prevState => {
            const players = prevState.players.filter(player => { return player.id !== id });
            return {players};   // es6 short hand property : 키와 값이 같으면 한 쪽을 생략
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="My Scoreboard" totalPlayers={this.state.players.length}/>
                {
                    this.state.players.map(player => (
                        <Player name={player.name} score={player.score} id={player.id} key={player.id}
                        removePlayer={this.handleRemove}/>
                    ))
                }
            </div>
        );
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));