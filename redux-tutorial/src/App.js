import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <p>{props.user}</p>
      <button onClick={() => props.updateUser('Jane')}>디스패치 테스트</button>
    </div>
  );
}

// Subscribe: 스토어의 State 를 현재 컴포넌트의  props 로 매핑
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  user: state.user
});

// function 을 props 로 매핑
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 function
  updateUser: (name) => dispatch(updateUser(name))
})

// ()() 두번 연속 들어가는 것은 curring function
// Hoc: High Order Component: 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한 신규 컴포넌트를 생성
export default connect(mapStateToProps, mapActionToProps)(App)

//export default App;
