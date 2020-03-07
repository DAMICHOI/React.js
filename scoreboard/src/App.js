import React from 'react';
import {Header} from './components/Header';
import './App.css'; // global로 정의된다.
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect, useSelector} from "react-redux";
import {CustomPlayer} from "./components/CustomPlayer";
import _ from 'lodash';

/*
// 2020.02.22
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// 2020.02.29 Migration
let maxId = 4;

//class App extends React.Component{
function App(props) {
    const players = useSelector(state => state.player.players)
    const getHighscore = () => {
        const highscore = _.maxBy(players, 'score').score;
        return highscore ? highscore : null;
    }
    return (
        <div className="scoreboard">
          <Header title="My Scoreboard" players={players}/>
          {
            props.players.map(player => (
                <CustomPlayer name={player.name} score={player.score} id={player.id} key={player.id}
                isHighScore={getHighscore() === player.score}/>
            ))
          }

          <AddPlayerForm></AddPlayerForm>
        </div>
    );
}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store 의 state
  players: state.player.players
});

export default connect(mapStateToProps, null)(App);
