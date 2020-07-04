import React, { useEffect, useState } from 'react';

import { Button } from '../../styles/global';
import { Container } from './styles';

import { QuestionParams } from '../../shared/types';

import QuestionDisplay from '../QuestionDisplay';

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
      <QuestionDisplay text={question.question} />
      <div className="choices-container">
        {
          choices.map(option => (
            <Button
              key={option}
              dangerouslySetInnerHTML={{ __html: option }}
              onClick={() => checkAnswer(option)}
              keepCase
            />))
        }
      </div>
    </Container>
  );
}



export default MultipleQuestion;