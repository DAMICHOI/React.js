import React from 'react';
import './App.css'; // global로 정의된다.

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

class Counter extends React.Component {

  constructor() {
    super();

    this.state = {
      score: 0
    }
  }

  handleChange = (delta) => {
    console.log(this);
    this.setState(prevState => ({score: prevState.score + delta}));
  }

  render() {
    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => this.handleChange(-1)}> - </button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={() => this.handleChange(1)}> + </button>
        </div>
    );
  }
}

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
      return {players};
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

export default App;
