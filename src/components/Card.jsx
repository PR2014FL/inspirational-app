import React from 'react'

function Card({currentImage}) {
  return (
    <div className="cardContainer">
        <img className="aPic" src={currentImage} alt="" />
    </div>
  )
}

export default Card