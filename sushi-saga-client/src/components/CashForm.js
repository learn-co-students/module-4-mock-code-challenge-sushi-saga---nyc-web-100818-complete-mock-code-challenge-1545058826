import React from 'react';
import './CashForm.css'

class CashForm extends React.Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="cash-form">
        <form onSubmit={(event) => this.props.addMoney(event, this.state.value)}>
          <label>MORE $$$??</label>
          <input type="number" name="cash" onChange={this.handleChange} value={this.state.value} />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default CashForm
