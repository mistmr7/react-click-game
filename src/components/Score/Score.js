import React, { Component } from 'react'
import './Score.css'
import Card from '../Card/Card'
// import coco from './coco.json'
import marioKart from '../../../src/marioKart.json'

// Function used to shuffle all of the cards
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

class Score extends Component {
  state = {
    marioKart,
    score: 0,
    highScore: 0,
    scores:[],
    chosen:[],
    welcomeMessage: "Click on any player to begin. Clicking any character more than once will result in a loss. Good luck!"
  }

    
  imageClickedHandler = (event) => {
    // check to see if the card has been chosen, if so, add 1 to the score
    if (this.state.chosen.indexOf(parseInt(event.target.id)) === -1){
      this.setState( (state) => { return {
        score: state.score + 1    
      }})
      
      // push the new target id into the selected array
      this.state.chosen.push(parseInt(event.target.id))

      // push the score to the scores array
      this.state.scores.push(this.state.score + 1)
    
        
        this.setState({
          highScore: Math.max.apply(null, this.state.scores),
          scores: this.state.scores,
          chosen: this.state.chosen, 
          marioKart: shuffle(marioKart),
          welcomeMessage: "Nice choice!"           
        })    

    } else {
      let score = 0;
      return this.setState({
        score: score,
        highScore:this.state.highScore,
        scores: this.state.scores,
        chosen:[],
        welcomeMessage: "Sorry, that item has already been clicked! Play again to see if you can set a new high Score!"
      })
    }
  }



 
  
  render() {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">React-Clicky-Game</span>
        <ul className="score">
          <li value={this.state.score}>Score: {this.state.score}</li>
          <li>High Score: {this.state.highScore}</li>
        </ul>
      </nav>
      <p className="text-center">{this.state.welcomeMessage}</p>
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