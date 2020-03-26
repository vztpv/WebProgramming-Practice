import React, { Component } from 'react';
import './App.css';
import ScrollBox from './ex10/ScrollBox.js';

class App extends Component {
  render() {
    return (
      <div className="React" >
        <ScrollBox ref={(ref) => this.ScrollBox = ref} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          to bottom
      </button>
      </div >
    );
  }
}

export default App;
