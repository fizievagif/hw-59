import React from 'react';
import './App.css';
import Jokes from "./Containers/Jokes/Jokes";
import Movies from "./Containers/Movies/Movies";

function App() {
  return (
    <div className="App">
      <Movies/>
      <Jokes/>
    </div>
  );
}

export default App;
