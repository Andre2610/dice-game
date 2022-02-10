import React from 'react';

export default function Score(props) {
  const { id, score, name } = props.player;

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
}
