import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ola from './Ola';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Só alterando alguma coisa do APP JS</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Ola></Ola>
      </div>
    );
  }
}

export default App;
