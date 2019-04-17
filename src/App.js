import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Product></Product>
        </header>
      </div>
    );
  }
}

export default App;
