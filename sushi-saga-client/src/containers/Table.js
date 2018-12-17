import React, { Fragment } from 'react'

const Table = ({budget, sushi}) => {
console.log(sushi);
const eaten = sushi.filter(sush => {
   return sush.eaten === true
})

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
        <div className="stack">
          {
            renderPlates(eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
