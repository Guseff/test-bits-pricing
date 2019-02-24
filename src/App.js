import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import PlansAndPricing from './components/PlansAndPricing';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <PlansAndPricing />
      </div>
    );
  }
}

export default App;
