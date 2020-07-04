import React, { useState, useEffect } from 'react';
import server from '../../services/server';

import { RankTable } from './styles';

interface Rank {
  username: string;
  score: number;
}

const Rank = () => {
  const [accuracy, setAccuracy] = useState<Rank[]>([]);
  const [speed, setSpeed] = useState<Rank[]>([]);
  const [wisdom, setWisdom] = useState<Rank[]>([]);

  useEffect(() => {
    server.get('/rank')
      .then(rank => {
        setAccuracy(rank.data.accuracy);
        setSpeed(rank.data.speed);
        setWisdom(rank.data.wisdom);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1 style={{ margin: '1rem' }}>Rank</h1>

      <h2 style={{ margin: '1rem' }}>Accuracy</h2>
      <RankTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            accuracy.map((rank, index) => (
              <tr key={rank.username}>
                <td>{index + 1}</td>
                <td>{rank.username}</td>
                <td>{rank.score.toFixed(2)}</td>
              </tr>
            ))
          }
        </tbody>
      </RankTable>

      <h2 style={{ margin: '1rem' }}>Speed</h2>
      <RankTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            speed.map((rank, index) => (
              <tr key={rank.username}>
                <td>{index + 1}</td>
                <td>{rank.username}</td>
                <td>{rank.score.toFixed(2)}</td>
              </tr>
            ))
          }
        </tbody>
      </RankTable>

      <h2 style={{ margin: '1rem' }}>Wisdom</h2>
      <RankTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            wisdom.map((rank, index) => (
              <tr key={rank.username}>
                <td>{index + 1}</td>
                <td>{rank.username}</td>
                <td>{rank.score.toFixed(2)}</td>
              </tr>
            ))
          }
        </tbody>
      </RankTable>
    </>
  );
}

export default Rank;