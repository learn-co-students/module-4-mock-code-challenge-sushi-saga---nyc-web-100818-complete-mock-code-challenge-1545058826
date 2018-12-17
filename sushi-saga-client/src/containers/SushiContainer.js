import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushiDisplayed, moreSushi, eatSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {sushiDisplayed.map(sushi => {
          return <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>
        })}
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
