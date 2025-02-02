import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './portfolio';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <Portfolio />
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
