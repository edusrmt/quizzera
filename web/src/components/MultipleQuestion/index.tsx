import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { QuestionParams } from '../../shared/types';

const MultipleQuestion:React.FC<QuestionParams> = ({ question, onAnswer }) => {
  const [choices, setChoices] = useState<string[]>([]);

  useEffect(() => {
    let options = [question.correct_answer, ...question.incorrect_answers];

    // Fisher-Yates Algorithm (Shuffles Array)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = options[i];
      options[i] = options[j];
      options[j] = temp;
    }

    setChoices(options);
  }, [question]);

  function checkAnswer (answer: string) {
    onAnswer(answer === question.correct_answer);
  }

  return (
    <Container>
      <div className="question-display">
        <p dangerouslySetInnerHTML={{ __html: question.question }} />
      </div>
      <div className="choices-container">
        {
          choices.map(option => <button key={option} dangerouslySetInnerHTML={{ __html: option }} onClick={() => checkAnswer(option)} />)
        }
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

export default MultipleQuestion;