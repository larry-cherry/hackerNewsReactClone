import React, { Component } from 'react';
// import logo from './logo.svg';
import Newsfeed from './containers/Newsfeed/Newfeed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Newsfeed/>
      </div>
    );
  }
}

export default App;
