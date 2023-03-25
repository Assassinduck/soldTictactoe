import { Component, createSignal, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { styled } from 'emotion-solid';
import { GameBoard } from './GameBoard';





const App: Component = () => {
  return (
    <div style={{ display: 'flex', "justify-content": "center", "margin-top":"50px"}}>
      <GameBoard />
    </div>
  );
};

export default App;
