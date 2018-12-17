import React from 'react'

const DEFAULT_STATE = {
  funds: 0
}
export default class SushiWallet extends React.Component {
  state = DEFAULT_STATE

  onInputChange = e => {
    this.setState({
      funds: e.target.value
    })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onWalletSubmit(this.state.funds)
    this.setState(DEFAULT_STATE)
  }

  render() {
    return (
      <div style={{margin: '0 auto', width: '250px'}}>
        <form onSubmit={this.onFormSubmit}>
          <label>Add 💵</label>
          <input type="number" name="funds" value={this.state.value} onChange={this.onInputChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}