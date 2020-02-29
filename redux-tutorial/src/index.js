import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from "react-redux";
import {store} from "./redux/store";

/*
const reducer = (state, actions) => {
    // actions.type 에 따라서 state 를 변형하는 로직 수행
    if (actions.type === 'changeState') {
        return actions.payload;
    }
    return 'State';
}
 */

const updateUser = {
    type: 'updateUser',
    payload: 'Tom'
}

// 1. 가입, 3. 데이터 수신
//store.subscribe(() => console.log(store.getState()))

//store.dispatch(updateUser);
// 2. 액션 디스패치 (publish)
/*
const actions = {
    type: 'changeState',    //actions type 은 String 이다.
    payload: 'newState'
}
store.dispatch(actions);
 */

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
