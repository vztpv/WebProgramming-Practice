import React from 'react';
import './App.css';
import MyCommponent from './ex3/MyComponent.js';

function App() {
  return (
    <div className="React">
      <MyCommponent name='hello' favoriteNumber={33}> <br /> TEST <br />
      </MyCommponent>
    </div >
  );
}

export default App;
