import React, { Fragment } from 'react'

const Sushi = ({sushi, handleEaten}) => {
  return (
    <div className="sushi">
    { sushi.eaten ?
      <div className="plate"></div> :
      <div
        className="plate"
        onClick={handleEaten}
        >
        <img src={sushi.img_url} width="100%" />
      </div>
    }
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
