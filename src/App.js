import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer/Footer';
import cat1 from './images/cat1.jpeg';
import cat2 from './images/cat2.jpeg';
import cat3 from './images/cat3.jpeg';
import cat4 from './images/cat4.jpeg';
import cat5 from './images/cat5.jpeg';
import cat6 from './images/cat6.jpeg';
import cat7 from './images/cat7.jpeg';
import cat8 from './images/cat8.jpeg';
import cat9 from './images/cat9.jpeg';
import cat10 from './images/cat10.jpeg';
import cat11 from './images/cat11.jpeg';
import cat12 from './images/cat12.jpeg';

const images = [
  {
    img: cat1,
    id: 1,
    clicked: false,
  },
  {
    img: cat2,
    id: 2,
    clicked: false,
  },
  {
    img: cat3,
    id: 3,
    clicked: false,
  },
  {
    img: cat4,
    id: 4,
    clicked: false,
  },
  {
    img: cat5,
    id: 5,
    clicked: false,
  },
  {
    img: cat6,
    id: 6,
    clicked: false,
  },
  {
    img: cat7,
    id: 7,
    clicked: false,
  },
  {
    img: cat8,
    id: 8,
    clicked: false,
  },
  {
    img: cat9,
    id: 9,
    clicked: false,
  },
  {
    img: cat10,
    id: 10,
    clicked: false,
  },
  {
    img: cat11,
    id: 11,
    clicked: false,
  },
  {
    img: cat12,
    id: 12,
    clicked: false,
  }
];



class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick.bind(this);
    this.state = {
      score: 0,
      topScore: 0,
      guessText: 'Click an image to begin',
      imgArray: JSON.parse(JSON.stringify(images)), // Start as a copy and never mutate the default
      incorrect: false
    }
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  handleClick = (id) => {
    console.log(images);
    const clickedIndex = this.state.imgArray.findIndex((obj) => obj.id === id);
    if (this.state.imgArray[clickedIndex].clicked === false) {
      this.state.imgArray[clickedIndex].clicked = true;
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.score >= this.state.topScore ? this.state.topScore + 1 : this.state.topScore,
        guessText: 'You Guessed Correctly',
        imgArray: this.shuffle(this.state.imgArray),
        incorrect: false
      });
    } else {
      this.setState({
        score: 0,
        guessText: 'You Guessed Incorrectly!',
        imgArray: this.shuffle(JSON.parse(JSON.stringify(images))),
        incorrect: true
      })
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar title={this.state.guessText} score={this.state.score} topScore={this.state.topScore}/>
        <Jumbotron />
        <Gameboard images={this.state.imgArray} incorrect={this.state.incorrect} clickHandler={(id) => this.handleClick(id)} />
        <Footer />
      </div>
    );
  }
}

export default App;
