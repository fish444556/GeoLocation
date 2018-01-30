import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from './GoogleMap';
import Display from './Display';
import Login from './Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
        <Display />
      </div>
    );
  }
}

export default App;
