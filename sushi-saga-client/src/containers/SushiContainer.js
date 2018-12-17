import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


// SushiContainer is parent to Sushi and MoreButton component 

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
            Render Sushi components here!
          */
         <div>
           <Sushi />
           <Sushi />
           <Sushi />
           <Sushi />
         </div>
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer