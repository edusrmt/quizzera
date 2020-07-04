import React, { useState, useEffect } from 'react';
import { Crosshair, Clock, Award } from 'react-feather';
import server from '../../services/server';

import { Container, Title } from '../../styles/global';
import { Content, RankTable } from './styles';
import Header from '../../components/Header';
import Navigator from '../../components/Navigator';

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
      <Header />
      <Content>
        <Title>Rank</Title>
        <h2><Crosshair />Accuracy</h2>
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

        <h2><Clock />Speed</h2>
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

        <h2><Award />Wisdom</h2>
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
      </Content>
      <Navigator active={1} />
    </>
  );
}

export default Rank;