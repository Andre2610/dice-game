import React from 'react';

export default function Score(props) {
  const { id, score } = props.player;

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{score}</td>
    </tr>
  );
}
