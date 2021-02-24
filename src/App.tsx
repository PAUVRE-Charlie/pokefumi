import React from 'react';
import './App.css';
import images from './images';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images.logo.src} className="App-logo" alt={images.logo.name} />
        
      </header>
    </div>
  );
}

export default App;
