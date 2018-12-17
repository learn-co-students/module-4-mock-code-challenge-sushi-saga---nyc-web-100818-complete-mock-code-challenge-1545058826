import React from 'react'

const MoreButton = ({handleMore}) => {

    return <button onClick={(event) => handleMore(event)}>
            More sushi!
          </button>
}

export default MoreButton
