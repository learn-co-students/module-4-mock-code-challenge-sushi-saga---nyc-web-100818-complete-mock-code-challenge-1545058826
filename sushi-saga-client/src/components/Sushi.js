import React, { Fragment } from 'react'

const Sushi = (props) => {

  const clickHandler = () => {
    console.log('here')
  }

  return (
    <div className="sushi">
      <div className="plate"
        onClick={this.clickHandler}>
        {
          /* Tell me if this sushi has been eaten! */
          true ?
            null
            :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi