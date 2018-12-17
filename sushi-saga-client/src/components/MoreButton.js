import React from 'react'

const MoreButton = ({moreSushi}) => {
    return <button onClick={event => moreSushi()}>
            More sushi!
          </button>
}

export default MoreButton
