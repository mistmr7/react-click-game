import React from 'react'
import './Card.css'
// import coco from './coco.json'
// import marioKart from './marioKart.json'

const Card = (props) => {
  
  return (
    <div className="card justify-content-center">
      <div className="card-body justify-content-center" onClick={props.click}>
        <img src={props.img} />
      </div>
    </div>
  )
}

export default Card;