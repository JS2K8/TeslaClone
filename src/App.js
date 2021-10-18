import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header style={{zIndex: 10}}/>
      <Home style={{zIndex: 1}}/>
    </div>
  );
}

export default App;
