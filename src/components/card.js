import React from 'react';

export default function Card(props) {
  return (
    <div className={props.appearance.cardBackground}>
      <div className={props.appearance.shape}></div>
    </div>
  );
}
