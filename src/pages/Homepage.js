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
  const [p1Roll, setP1Roll] = useState(null);
  const [p2Roll, setP2Roll] = useState(null);
  const [userFeedback, setUserFeedback] = useState('');

  const diceRoll = () => {
    const roll = Math.ceil(Math.random() * 6);
    if (playerOneTurn) {
      setP1Roll(roll);
    } else {
      setP2Roll(roll);
    }
    setPlayerOneTurn(!playerOneTurn);
  };

  const compareScore = () => {
    console.log('comparing score');
    if (p1Roll === p2Roll) return endTurn("It's a tie");

    const turnWinnerId = p1Roll > p2Roll ? 1 : 2;
    const newScore = score.map((player) =>
      player.id !== turnWinnerId
        ? player
        : { ...player, score: player.score + 1 }
    );
    setScore(newScore);

    endTurn(`Player ${turnWinnerId} won the turn!`);
  };
  const endTurn = (message) => {
    setUserFeedback(message);
    setP1Roll(null);
    setP2Roll(null);
  };

  console.log(`Player one roll: ${p1Roll} | Player two roll: ${p2Roll}`);

  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <ScoreTable score={score} />
      {userFeedback && <p>{userFeedback}</p>}
      <button onClick={() => (p1Roll && p2Roll ? compareScore() : diceRoll())}>
        Roll
      </button>
    </div>
  );
}
