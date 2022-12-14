import React from 'react';
import uniqid from 'uniqid';
export default function Card({ card, handleClick }) {
  return (
    <div
      className={`${card.appearance.cardBackground} card`}
      onClick={() => {
        handleClick(card.id);
      }}
    >
      <div className={`${card.appearance.shape} ${card.appearance.shapeBackground}`}></div>
    </div>
  );
}

export class CreateCard {
  constructor(appearance) {
    this.id = uniqid();
    this.appearance = appearance;
    this.isClicked = false;
  }
}
