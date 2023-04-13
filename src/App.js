import React from 'react';
import './App.css';

import Jokes from './components/jokes';

function App() {
  return (
    <div className="App">
      <h1>Are you ready to laugh?</h1>
      <Jokes />
    </div>
  );
}

export default App;