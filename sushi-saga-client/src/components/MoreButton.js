import React from 'react'

const MoreButton = ({onMoreClick, display}) => {
    return <button onClick={onMoreClick}>{display}</button>
}

export default MoreButton