import React from 'react';
import './App.css';
import MyCommponent from './ex3/MyComponent.js';
import Counter from './ex4/Counter.js'

const App = () => {
  return (
    <div className="React">
      <MyCommponent name='hello' favoriteNumber={33}> <br /> TEST <br />
      </MyCommponent>
      <Counter />
    </div >
  );
}

export default App;
