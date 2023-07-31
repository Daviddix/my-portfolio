import React from 'react'

function SingleStack({icon, name}) {
  return (
    <div>
        <img src={icon} alt={`icon of ${name}`} />
        <p>{name}</p>
    </div>
  )
}

export default SingleStack