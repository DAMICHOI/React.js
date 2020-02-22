//1번 예제
/*
const TodoHeader = () => {
    return (
        <h1 className="text-center">Todo List</h1>
    );
}

const TodoForm = () => {
    return(
        <form className="text-center mb-3">
            <input type="text" className="form-control mb-3"/>
            <button className="btn btn-primary">App Todo</button>
        </form>
    );
}

const  TodoList = () => {
    return (
        <ul className="list-group">
            <Todo/>
        </ul>
    );
}

const Todo = () => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <input type="checkbox"/>
            <span className="flex-grow-1 ml-3">영어 공부하기</span>
            <button className="btn btn-danger">
                Delete
            </button>
        </li>
    )
}

const TodoApp = () => {
    return (
        <div className="container mt-3">
            <TodoHeader/>
            <TodoForm/>
            <TodoList/>
        </div>
    );
}
ReactDOM.render(<TodoApp></TodoApp>, document.getElementById('root'));
*/

//2번 예제
const todos = [];
todos.push({index: 1, value: "Write my todo list", done: true});
todos.push({index: 2, value: "learn react", done: false});
todos.push({index: 3, value: "learn Webpack", done: false});
todos.push({index: 4, value: "learn ES6", done: false});
todos.push({index: 5, value: "learn Routing", done: false});
todos.push({index: 6, value: "learn Redux", done: false});

const TodoList = () => {
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <Todo key={todo.index} text={todo.value}/>
                ))
            }
        </ul>
    );
}

const Todo = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <input type="checkbox"/>
            <span>{props.text}</span>
            <button className="btn btn-danger">
                Delete
            </button>
        </li>
    )
}

const TodoForm = () => {
    return (
        <form className="text-center mb-3">
            <input className="form-control mb-3" type="text"/>
            <button className="btn btn-primary">Add Todo</button>
        </form>
    )
}

const TodoHeader = (props) => {
    return (
        <h1 className="text-center">{props.title}</h1>
    )
}

const TodoApp = (props) => {
    return (
        <div className="container mt-3">
            <TodoHeader title="Todo List"/>
            <TodoForm/>
            <TodoList/>
        </div>
    )
}

ReactDOM.render(<TodoApp initData={todos}/>, document.getElementById('root'));