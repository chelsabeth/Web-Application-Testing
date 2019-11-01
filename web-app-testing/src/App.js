import React from 'react';
import logo from './logo.svg';
import './App.css';

// created an "isolated" function -aka unit- that is easy to test!
export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;

function App() {
  return (
    <div className="App">
      <h1>Take me out to the ball game! ⚾️</h1>
    </div>
  );
}

export default App;
