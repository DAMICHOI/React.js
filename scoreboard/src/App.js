import React from 'react';
import {Header} from './components/Header';
import './App.css'; // global로 정의된다.
import {Player} from './components/Player';
import {AddPlayerForm} from "./components/AddPlayerForm";

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
class App extends React.Component{
  state = {
    players: [
      {name: 'LDK', score: 5, id: 1},
      {name: 'HONG', score: 6, id: 2},
      {name: 'KIM', score: 7, id: 3},
      {name: 'PARK', score: 8, id: 4}
    ]
  }

  handleRemove = (id) => {
    //console.log('handleRemove', id)
    this.setState(prevState => {
      const players = prevState.players.filter(player => { return player.id !== id });
      return {players};
    })
  }

  handleChangeScore = (id, delta) => {
    //console.log('changeScore', id, delta);
    this.setState(prevState => {
      const players = [...prevState.players];
      players.forEach(player => {
        if (player.id == id) {
          player.score += delta;
        }
      });
      return {players};
    })
  }

  render() {
    return (
        <div className="scoreboard">
          <Header title="My Scoreboard" players={this.state.players} totalPlayers={this.state.players.length}/>
          {
            this.state.players.map(player => (
                <Player name={player.name} score={player.score} id={player.id} key={player.id}
                        removePlayer={this.handleRemove} changeScore={this.handleChangeScore}/>
            ))
          }
          <AddPlayerForm></AddPlayerForm>
        </div>
    );
  }
}

export default App;
