import React from 'react'

const Receipt = ({ plates }) => {

  const renderPlates = () => {
    return plates.map(p => {
      return (
        <tr key={p.id}>
          <td>{p.name}</td>
          <td>$ {p.price}</td>
        </tr>
      )
    })
  }

  return (
    <div style={{margin: '150px auto', width: '250px'}}>
      <table>
        <thead>
          <tr>
            <th>Sushi</th>
            <th>Price</th>
          </tr>
          {renderPlates()}
        </thead>
      </table>
      <hr />
      <div>Total spent: $ {plates.reduce((sum, plate) => {
        sum += plate.price
        return sum 
      }, 0)}</div>
    </div>
  )
}

export default Receipt