import React, { Fragment } from 'react'

import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = ({ sushi, onMoreClick, onEat }) => {
  const sushiItems = sushi.map(s => <Sushi key={s.id} onEat={onEat} sushi={s} />)
  return (
    <Fragment>
      <div className="belt">
        {sushiItems}
        <MoreButton onMoreClick={onMoreClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer