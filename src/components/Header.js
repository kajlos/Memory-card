import React from 'react';
import Scoreboard from './Scoreboard';
export default function Header({ scoreboard }) {
  return (
    <header>
      <h1>Memory Game</h1>
      <Scoreboard scoreboard={scoreboard} />
    </header>
  );
}
