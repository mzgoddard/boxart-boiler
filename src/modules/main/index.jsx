import React from 'react';

import {Animated, AnimatedAgent} from 'boxart';

import Component from '../update-ancestor';

class Main extends Component {

  constructor() {
    super();

    this.state = {
      pos: 'left'
    };
  }

  rerender() {
    this.setState({
      pos: this.state.pos === 'left' ? 'right' : 'left'
    });
  }

  render() {
    var pos1, pos2;
    // To use a custom duration:
    // <Animated animateKey="h1" animate={(options) => {
    //   return options.animateFromLast(2);
    // }}>
    var card = (
      <Animated animateKey="h1">
        <div className="card">A &hearts;</div>
      </Animated>
    );

    if (this.state.pos === 'right') {
      pos1 = card;
    } else {
      pos2 = card;
    }

    return (
      <AnimatedAgent>
        <div className="game-board">
          <div className="container" id="container1">
            {pos1}
          </div>
          <div className="container" id="container2">
            {pos2}
          </div>
          <button type="button" onClick={this.rerender}>Shift It</button>
        </div>
      </AnimatedAgent>
    );
  }
}

export default Main;
