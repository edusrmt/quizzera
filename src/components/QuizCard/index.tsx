import React from 'react';
import { Quiz } from '../../shared/quizzes';
import styled from 'styled-components';

const QuizCard: React.FC<Quiz> = (props) => {
  return (
    <Container>
      <h3>{props.category.name}</h3>
      <span>{props.type === 'multiple' ? 'Multiple Choice' : 'True or False'}</span>
      <span className="capitalize">{props.difficulty}</span>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 1rem .5rem 1rem;
  padding: 1rem;

  span {
    display: block;
    margin-top: .5rem;
  }

  span.capitalize {
    text-transform: capitalize;
  }
`;

export default QuizCard;