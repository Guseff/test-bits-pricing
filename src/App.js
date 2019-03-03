import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import PlansAndPricing from './components/PlansAndPricing';
import Includes from './components/Includes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <PlansAndPricing />
          <Includes />
          <FAQ />
          <Footer />
      </div>
    );
  }
}

export default App;
