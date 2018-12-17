import React, { Fragment } from 'react'

import SushiWallet from '../components/SushiWallet'
import Receipt from '../components/Receipt'

const Table = ({budget, plates, onWalletSubmit}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={x.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <SushiWallet onWalletSubmit={onWalletSubmit} />
        <Receipt plates={plates} />
        <div className="stack">
          {renderPlates(plates)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table