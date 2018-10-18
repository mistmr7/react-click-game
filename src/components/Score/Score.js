import React, { Component } from 'react'
import './Score.css'
import Card from '../Card/Card'
// import coco from './coco.json'
import marioKart from '../../../src/marioKart.json'

class Score extends Component {
  state = {
    marioKart,
    score: 0,
    highScore: 0,
    chosen:[]
  }

    
  imageClickedHandler = (event) => {
    
    if (this.state.chosen.indexOf(parseInt(event.target.id)) === -1){
      this.setState( (state) => { return {
        score: state.score + 1    
      }})
      const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        
        return array; 
      }
      this.state.chosen.push(parseInt(event.target.id))

      this.setState(state => { return {
        highScore: Math.max(state.highScore || state.score), 
        marioKart: shuffle(marioKart)           
      }})

    } else {
      this.setState({
        score: 0
      })
    }
  }

  highScoreChecker = (event) => {
    console.log('clicked')
    if (this.state.highScore < this.state.score) {
      this.setState({
        highScore: this.state.score
      })
    }
  }

 
  
  render() {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">React-Clicky-Game</span>
        <ul className="score">
          <li onChange={this.highScoreChecker} value={this.state.score}>Score: {this.state.score}</li>
          <li>High Score: {this.state.highScore}</li>
        </ul>
      </nav>
      <div className="row justify-content-center">
        {this.state.marioKart.map(character => (
          <Card 
            id={character.id}
            key={character.id}
            img={character.img}
            click={this.imageClickedHandler}/>
        ))}         
      </div>
    </div>
        
  )
}
}

export default Score;