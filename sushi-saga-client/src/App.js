import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const paging = {
  limit: 4,
  total: 100,
  firstPage: 1
}
paging.lastPage = (paging.total / paging.limit)

class App extends Component {
  state = {
    budget: 100,
    sushiPage: paging.firstPage,
    sushi: [],
    plates: []
  }

  componentDidMount() {
    this.getSushi()
  }

  getSushi = () => {
    fetch(`${API}?_page=${this.state.sushiPage}&_limit=${paging.limit}`)
      .then(r => r.json())
      .then(sushiData => {
        const sushi = sushiData.map(apiSushi => {
          if (this.state.plates.find(s => s.id === apiSushi.id)) {
            apiSushi.eaten = true
          }
          return apiSushi
        })
        this.setState({ sushi })
      })
  }

  onMoreClick = () => {
    const sushiPage = this.state.sushiPage + 1 > paging.lastPage ? paging.firstPage : this.state.sushiPage + 1
    this.setState({
      sushiPage
    }, this.getSushi)
  }

  onPrevClick = () => {
    const sushiPage = this.state.sushiPage - 1 < paging.firstPage ? paging.lastPage : this.state.sushiPage - 1
    this.setState({
      sushiPage
    }, this.getSushi)
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

  onWalletSubmit = moneyToAdd => {
    const budget = this.state.budget + parseInt(moneyToAdd)
    this.setState({ budget })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer onEat={this.onEat} sushi={this.state.sushi} onMoreClick={this.onMoreClick} onPrevClick={this.onPrevClick} />
        <Table onWalletSubmit={this.onWalletSubmit} plates={this.state.plates} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;