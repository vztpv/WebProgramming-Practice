import React from 'react';
import './App.css';
import MyCommponent from './ex3/MyComponent.js';
import Counter from './ex4/Counter.js'
import Say from './ex5/Say.js'
import EventPractice from './ex8/EventPractice.js'

const App = () => {
  return (
    <div className="React">
      <Say />
      <EventPractice />
    </div >
  );
}

export default App;
