import React, { useState, useEffect } from 'react';
import { Clock, HelpCircle, CheckCircle } from 'react-feather';

import { Container } from './styles';

interface QuizStatusProps {
  totalTime: number;
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  onTimeEnd: () => void;
}

const QuizStatus: React.FC<QuizStatusProps> = (props) => {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    setCounter(props.totalTime);
  }, []);

  useEffect(() => {
    counter > 0 && setTimeout(() => {
      if (counter === 1)
        props.onTimeEnd();

      setCounter(counter - 1);
    }, 1000);
  }, [counter]);

  return (
    <Container>
      <span>
        <Clock />{counter}
      </span>
      <span>
        <HelpCircle />{`${props.answeredQuestions}/${props.totalQuestions}`}
      </span>
      <span>
        <CheckCircle />{props.correctAnswers}
      </span>
    </Container>
  );
}

export default QuizStatus;