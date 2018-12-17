import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


//App component is parent to Table and SushiContainer components - Table and SushiContainer are rendered inside App.js



class App extends Component {

  render() {
    return (
      <div className="app">
        <SushiContainer  />
        <Table />
      </div>
    );
  }
}

export default App;