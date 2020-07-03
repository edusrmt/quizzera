import React from 'react';
import styled from 'styled-components';

import { QuestionParams } from '../../shared/types';

const BooleanQuestion:React.FC<QuestionParams> = ({ question, onAnswer }) => {
  
  function checkAnswer (answer: string) {
    onAnswer(answer === question.correct_answer);
  }

  return (
    <Container>
      <div className="question-display">
        <p dangerouslySetInnerHTML={{ __html: question.question }} />
      </div>
      <div className="choices-container">
        <button onClick={() => checkAnswer('True')}>True</button>
        <button onClick={() => checkAnswer('False')}>False</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .question-display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
    min-height: 25vh;
    text-align: center;
  }

  .choices-container {
    button {
      width: calc(100% - 2rem);
      margin: 1rem 1rem 0 1rem;
      height: 10vh;
    }
  }
`;

export default BooleanQuestion;