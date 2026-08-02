import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Board from './components/Board'
import AddTask from './components/AddTask'

function App() {
  return (
    <div className="app">
      <Header />
      <AddTask />
      <Board />
    </div>
  );
}

export default App;
