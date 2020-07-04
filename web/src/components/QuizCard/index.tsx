import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, CheckSquare, Hash } from 'react-feather';

import { Quiz } from '../../shared/quizzes';
import { Container } from './styles';

const QuizCard: React.FC<Quiz> = (props) => {
  const history = useHistory();

  function handleClick() {
    const triviaState = {
      category: props.category.id,
      difficulty: props.difficulty,
      type: props.type
    };

    history.push('/quiz', triviaState);
    return;
  }

  return (
    <Container onClick={handleClick}>
      <h3>{props.category.name}</h3>
      <span>
        {props.type === 'multiple' ? <Grid /> : <CheckSquare />}
        {props.type === 'multiple' ? 'Multiple Choice' : 'True or False'}
      </span>
      {
        props.type === 'multiple' &&
        <span className="capitalize"><Hash />{props.difficulty}</span>
      }
    </Container>
  );
}

export default QuizCard;