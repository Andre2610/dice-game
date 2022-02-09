import React from 'react';
import Score from './Score';

export default function ScoreTable(props) {
  const { score } = props;
  return (
    <table style={{ margin: '0 auto' }}>
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {score.map((eachPlayer) => {
          const { id } = eachPlayer;
          return <Score key={id} player={eachPlayer} />;
        })}
      </tbody>
    </table>
  );
}
