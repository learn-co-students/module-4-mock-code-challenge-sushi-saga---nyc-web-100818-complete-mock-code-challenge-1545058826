import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    budget: 100,
    sushiPage: 1,
    sushi: [],
    plates: []
  }

  componentDidMount() {
    this.getSushi()
  }

  getSushi = () => {
    fetch(`${API}?_page=${this.state.sushiPage}&_limit=4`).then(r => r.json()).then(sushi => {
      this.setState({ sushi })
    })
  }

  onMoreClick = () => {
    this.setState({
      sushiPage: this.state.sushiPage + 1
    }, () => this.getSushi())
  }

  onEat = (sushi) => {
    if (this.state.budget - sushi.price >= 0) {
      const newSushi = [...this.state.sushi].map(s => s === sushi ? { ...s, eaten: true } : s)
      this.setState({
        sushi: newSushi,
        plates: [...this.state.plates, sushi],
        budget: this.state.budget - sushi.price
      })
    } else {
      alert('nope, not enough 💵')
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer onEat={this.onEat} sushi={this.state.sushi} onMoreClick={this.onMoreClick} />
        <Table plates={this.state.plates} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;