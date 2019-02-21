import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Plans from './components/Plans';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Plans />
      </div>
    );
  }
}

export default App;
