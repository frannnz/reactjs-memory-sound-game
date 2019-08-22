import React, { Component } from 'react'
import './index.css'
import Card from './components/Cards'
import Sound from "react-sound"
import sound1 from "./components/sounds/sound1.mp3"
import sound2 from "./components/sounds/sound2.mp3"
import sound3 from "./components/sounds/sound3.mp3"
import sound4 from "./components/sounds/sound4.mp3"
import sound5 from "./components/sounds/sound5.mp3"
import sound6 from "./components/sounds/sound6.mp3"
import sound7 from "./components/sounds/sound7.mp3"
import sound8 from "./components/sounds/sound8.mp3"
import sound9 from "./components/sounds/sound9.mp3"
import sound10 from "./components/sounds/sound10.mp3"
import sound11 from "./components/sounds/sound11.mp3"
import sound12 from "./components/sounds/sound12.mp3"
import applause from "./components/sounds/applause.mp3"

console.clear();

const howMany = 12;
export class App extends Component {

  state = {
    cards: Array.from({ length: howMany }, (v, k) => k + 1),
    cardsDup: [],
    turned: [],
    matched: [],
    founded: [],
    counter: 1,
    playSound: null,
  }

  playSound = item => {
    if (item === 1) {
      console.log("Sound1 played");
      return <Sound url={sound1} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 2) {
      console.log("Sound2 played");
      return <Sound url={sound2} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 3) {
      console.log("Sound3 played");
      return <Sound url={sound3} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 4) {
      console.log("Sound4 played");
      return <Sound url={sound4} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 5) {
      console.log("Sound5 played");
      return <Sound url={sound5} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 6) {
      console.log("Sound6 played");
      return <Sound url={sound6} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 7) {
      console.log("Sound7 played");
      return <Sound url={sound7} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 8) {
      console.log("Sound8 played");
      return <Sound url={sound8} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 9) {
      console.log("Sound9 played");
      return <Sound url={sound9} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 10) {
      console.log("Sound10 played");
      return <Sound url={sound10} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 11) {
      console.log("Sound11 played");
      return <Sound url={sound11} playStatus={Sound.status.PLAYING} />;
    }
    if (item === 12) {
      console.log("Sound12 played");
      return <Sound url={sound12} playStatus={Sound.status.PLAYING} />;
    }
  };

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
  }

  dupArr = (array) => {
    const newArr = array.concat(array);
    this.setState(
      {
        //shuffle array!
        cardsDup: this.shuffle(newArr)
      }
    )
  }

  clicked = (index, item) => {
    this.setState({ playSound: item })
    // check if same card is clicked
    if (this.state.turned[0] === index && this.state.turned.length === 1) {
    }
    else {
      if (this.state.turned.length === 2) {
        this.setState({
          turned: [index],
          matched: [item],
          counter: this.state.counter + 1,
        })
      }
      else {
        this.setState({
          turned: this.state.turned.concat(index),
          matched: this.state.matched.concat(item),

        })
        if (this.state.matched == item) {
          this.setState({
            founded: this.state.founded.concat(item),
          })
          console.log("match");
        }
      }
    }
  }

  newGame = () => {
    console.log("new game");
    this.setState({
      cards: Array.from({ length: howMany }, (v, k) => k + 1),
      cardsDup: [],
      turned: [],
      matched: [],
      founded: [],
      counter: 1,
      playSound: null,
    })
    this.dupArr(this.state.cards)
  }


  componentDidMount() {
    // duplicate Array cards
    this.dupArr(this.state.cards)
  }

  render() {
    return (
      <div className="all">
        {this.state.playSound !== "" && this.playSound(this.state.playSound)}
        {<div className="title"> REACTJS-MEMORY-SOUND-GAME </div>}

        {this.state.founded.length === howMany &&
          <div className="won">
            <Sound
              url={applause}
              playStatus={Sound.status.PLAYING}
            />
            Congratulations!
            <br></br>
            {this.state.counter} turns!
            <br></br>
            <button onClick={this.newGame}>START NEW GAME</button>
          </div>
        }

        <div className="cards">
          {this.state.cardsDup.map((item, index) => (
            <Card
              key={index}
              index={index}
              item={item}
              clicked={this.clicked}
              flipped={this.state.flipped}
              turned={this.state.turned}
              founded={this.state.founded}
              counter={this.state.counter}
            />
          ))
          }
        </div>
        <div className="turn">Turn: {this.state.counter}</div>
      </div>
    )
  }
}

export default App
