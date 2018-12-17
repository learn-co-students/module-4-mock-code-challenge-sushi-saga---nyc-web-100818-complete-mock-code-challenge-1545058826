import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import CashForm from './components/CashForm';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    startIndex: 0,
    budget: 100,
    plates: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiData => {
      const sushis = sushiData.map(sushiObj => {
        return {...sushiObj, eaten: false}
      })
      this.setState({ sushis })
    })
  }

  sushiToDisplay = () => this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)

  handleMore = (event) => {
    if (this.state.startIndex >= this.state.sushis.length) {
      this.setState({ startIndex: 0 })
      // debugger
    } else {
      this.setState(prevState => ({
        startIndex: prevState.startIndex + 4
      }))
    }
  }

  // handleMore = (event) => {
  //   let nextFour = this.state.startIndex + 4
  //   if (nextFour > this.state.sushis.length) {
  //     nextFour = 0
  //   }
  //   this.setState({ startIndex: nextFour })
  // }

  handleEaten = (id, price) => {
    console.log(id, price);
    if (this.state.budget >= price) {
      const minusPrice = this.state.budget - price
      const newData = this.state.sushis.map(sushi => {
        if (sushi.id === id) {
          return {...sushi, eaten: true}
        } else {
          return sushi;
        }
      })
      this.setState({ sushis: newData, budget: minusPrice, plates: [...this.state.plates, id] })
    } else {
      alert("No more $$$, go to the ATM!")
    }
  }

  addMoney = (event, money) => {
    event.preventDefault()
    const moreMoney = (this.state.budget + parseInt(money))
    this.setState({ budget: moreMoney })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          sushiDisplay={this.sushiToDisplay()}
          handleMore={this.handleMore}
          handleEaten={this.handleEaten}/>
        <Table
          budget={this.state.budget}
          plates={this.state.plates}/>
        <CashForm
          addMoney={this.addMoney}
          budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
