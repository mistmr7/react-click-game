import React from 'react'
import './Card.css'
// import coco from './coco.json'
// import marioKart from './marioKart.json'

const Card = (props) => {
  return (
  <div className="card justify-content-center align-middle" onClick={props.click}>
    <div className="img-container vertical-center">
      <img className="characterImage" alt={props.name} id={props.id} src={props.img}/>
    </div>
  </div>
  )
}


export default Card;