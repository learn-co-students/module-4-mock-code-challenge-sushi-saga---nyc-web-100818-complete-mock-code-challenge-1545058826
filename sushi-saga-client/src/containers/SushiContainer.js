import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushiDisplay, handleMore, handleEaten}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushiDisplay.map(sushi => {
            return <Sushi key={sushi.id} sushi={sushi} handleEaten={() => handleEaten(sushi.id, sushi.price)} />
          })
        }
        <MoreButton handleMore={handleMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
