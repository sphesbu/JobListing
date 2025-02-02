import React from 'react'

function Card({children, bg = 'bg-gray-100'}) {
  return (
    <div className={`${bg} bg-gray-100 p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card