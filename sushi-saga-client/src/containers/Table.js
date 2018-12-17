import React, { Fragment } from 'react'

import SushiWallet from '../components/SushiWallet'

const Table = ({budget, plates, onWalletSubmit}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <SushiWallet onWalletSubmit={onWalletSubmit} />
        <div className="stack">
          {renderPlates(plates)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table