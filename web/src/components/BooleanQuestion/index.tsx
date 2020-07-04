import React from 'react';

import { Button } from '../../styles/global';
import { Container } from './styles';

import { QuestionParams } from '../../shared/types';
import QuestionDisplay from '../QuestionDisplay';

const BooleanQuestion:React.FC<QuestionParams> = ({ question, onAnswer }) => {
  
  function checkAnswer (answer: string) {
    onAnswer(answer === question.correct_answer);
  }

  return (
    <Container>
      <QuestionDisplay text={question.question} />
      <div className="choices-container">
        <Button onClick={() => checkAnswer('True')} keepCase>True</Button>
        <Button onClick={() => checkAnswer('False')} keepCase>False</Button>
      </div>
    </Container>
  );
}



export default BooleanQuestion;