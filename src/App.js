import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Me from './components/Me'
import Schools from './components/Schools'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Appli</h2>
        </div>
        <p className="App-intro">
            <Me />       </p>

        <div id='schools'><Schools /></div>
      </div>
    );
  }
}

export default App;
