import React, { Component } from 'react';
import './App.css';
import ScrollBox from './ex10/ScrollBox.js';
import IterationSample from './ex11/IterationSample.js'
import LifeCycleSample from './ex12/LifeCycleSample.js'


function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({ color: getRandomColor() });
  }

  render() {
    return (
      <div className="React" >
        <IterationSample></IterationSample>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
        <button onClick={this.handleClick}> random </button>
      </div >
    );
  }
}

export default App;
