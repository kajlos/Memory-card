import React from 'react';

export default function Scoreboard({ scoreboard: { current, best } }) {
  return (
    <div className="scoreboard">
      <b>Score: {current}</b>
      <b>Best Score: {best}</b>
    </div>
  );
}
