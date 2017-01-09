import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Me from './components/Me'
import Schools from './components/Schools'
import Recs from './components/Recs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Appli</h2>
        </div>
        <div className="App-intro">
            <Me />       </div>

        <div id='schools'><Schools /></div>
        <div id='recs'><Recs /></div>
      </div>
    );
  }
}

export default App;
