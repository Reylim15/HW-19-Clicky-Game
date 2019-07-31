import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PillPost from './components/PillPost';
import Icons from './pills.json';
import "./components/PillPost.css";




class App extends Component {


  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Icons,
    gameOver: false
  };

  // Below shows how the page is going to be rendered onto the webpage by calling the components.
  render() {
      return (
        <div className='container'>           
          <Header topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result} />
        <div className='mainStyle'>
          {this.state.Icons.map(icon => (
            <PillPost
              id={icon.id}
              image={icon.image}
              PillClicked={this.PillClicked}
            />
          ))}
        </div>
      </div>
    );
  }


//  If player clicks a img, then increase points, else Gameover. 
  PillClicked = id => {
    console.log(`Taken: ${id}`);
    if (!this.state.clicked.includes(id)) {
      this.scoreIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.gameOver();
    }
  }

  // Message fires if user collected all the pills
  scoreIncrease = () => {
    let score = this.state.currentScore + 1;
    console.log(`the score is ${score}`);
    if (score === this.state.Icons.length) {
      this.setState({
        result: "You Collected All The PillS!!!!!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        Icons,
        gameOver: false
      });
// Message fires when user has a nice top score.
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "Awesome!, You're getting better!!",
      });

      // message fires when user is still clicking
    } else {
      this.setState({
        currentScore: score,
        result: "Nice, A few More To go!!"
      });
    }
    this.resetIconArray();
  }

  // This tells the user that He's OD'ed and restarts the game.
  gameOver = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      result: "You OD'ed!!!",
      clicked: [],
      Icons,
      gameOver: true
    });
    console.log('Game over? ', this.state.gameOver);
    this.resetIconArray();
  }

  // This shuffles the array into a new one
  resetIconArray = () => {
    let newScramble = mixPills(Icons);
    this.setState({ Icons: newScramble })
  }

  
}

// Want to make a functiopn that reshuffles after a certain amount of Time.
// const pillShuffle = 

// This shuffles the img around.
const mixPills = (array) => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};
export default App;
