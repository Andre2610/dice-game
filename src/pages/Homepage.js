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
  const [targetSCore, setTargetSCore] = useState(5);
  const [p1Roll, setP1Roll] = useState(0);
  const [p2Roll, setP2Roll] = useState(0);
  const [userFeedback, setUserFeedback] = useState(null);

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

    endTurn(`Player ${turnWinnerId} won the turn!`, newScore);
  };
  const endTurn = (message, newScore) => {
    const winner = newScore.find((player) => player.score === targetSCore);
    const winnerMessage =
      winner &&
      `We have a winner! Player ${winner.id} reached ${targetSCore} points!`;

    setUserFeedback({
      ...userFeedback,
      winnerMessage,
      turnMessage: message,
    });
    setP1Roll(0);
    setP2Roll(0);
  };

  console.log(`Player one roll: ${p1Roll} | Player two roll: ${p2Roll}`);

  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <ScoreTable score={score} />

      <button onClick={() => (p1Roll && p2Roll ? compareScore() : diceRoll())}>
        {p1Roll && p2Roll ? 'Compare scores' : 'Roll'}
      </button>
      <p>
        <span>{p1Roll}</span> -{' '}
        {userFeedback && userFeedback.turnMessage + ' - '}
        <span>{p2Roll}</span>
      </p>
      {userFeedback && <p>{userFeedback.winnerMessage}</p>}
    </div>
  );
}
