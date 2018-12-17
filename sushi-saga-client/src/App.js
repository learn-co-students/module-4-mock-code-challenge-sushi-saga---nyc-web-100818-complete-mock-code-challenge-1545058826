import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = { sushi: [], index: 0, budget:0 }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(json => {
      const sushi = json.map(sushi => ({
          ...sushi, eaten: false
      }))
      this.setState({ sushi })
    })
  }

  sushiDisplayed = () => {
     return this.state.sushi.slice(this.state.index, this.state.index + 4 )
  }

  moreSushi = () => {
    debugger
    this.setState({ index: this.state.index + 4})
  }

  eatSushi = (id, price) => {
    if( this.state.budget >= price ) {
      const updatedSushi = this.state.sushi.map(sushi => {
        return sushi.id === id ? {...sushi, eaten: true} : sushi
      })
      this.setState(currentState => ({
        sushi: updatedSushi, budget: currentState.budget - price
      }))
    } else {
      alert('add to your sushi wallet please')
    }
  }

  sushiWallet = (event) => {
    event.preventDefault()
    const wallet = document.getElementById('wallet-form')
    const input = document.getElementById('wallet-input').value
    const budget =  this.state.budget + parseInt(input)
    this.setState({ budget })
    wallet.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiDisplayed={this.sushiDisplayed()} moreSushi={this.moreSushi} eatSushi={this.eatSushi}/>
        <Table sushi={this.state.sushi} budget={this.state.budget}/>
        <h2>Wallet💸</h2>
        <form onSubmit={this.sushiWallet} id="wallet-form" >
          <input id="wallet-input" type="text" placeholder="amount to add" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
