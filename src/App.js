import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import PlansAndPricing from './components/PlansAndPricing';
import Includes from './components/Includes';
import FAQ from './components/FAQ';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <PlansAndPricing />
          <Includes />
          <FAQ />
      </div>
    );
  }
}

export default App;
