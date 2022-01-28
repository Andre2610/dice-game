import React, { useState } from 'react';
import ScoreTable from '../components/ScoreTable';

const initialScore = [
  {
    id: 1,
    score: 0,
  },
  {
    id: 2,
    score: 0,
  },
];

export default function Homepage() {
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [score, setScore] = useState(initialScore);

  return (
    <div>
      <ScoreTable score={score} />
    </div>
  );
}
