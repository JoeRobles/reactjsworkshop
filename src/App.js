import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from "./components/Friends";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <h2>Welcome to React's Friend list</h2>
        </div>
        <div className="app-intro">
          <Friends />
        </div>
      </div>
    );
  }
}

export default App;
