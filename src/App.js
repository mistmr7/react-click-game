import React, { Component } from 'react';
import Card from './components/Card/Card';
import marioKart from './marioKart.json';
import './App.css';

class App extends Component {

  state = {
    marioKart
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.state.marioKart.map(character => (
            <Card 
              id={character.id}
              key={character.id}
              img={character.img}/>
          ))}         
        </div>
      </div>
    );
  }
}

export default App;
