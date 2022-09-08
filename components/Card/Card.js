import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

const Card = ({ cover }) => {
  return (
    <div className="cardContainer">
      <div className="info">
        <p>Lorem ipsum dolor</p>
        <BsFillPlayFill className='play' />
      </div>
      <img src={cover} />
    </div>
  )
}

export default Card