import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { trivia } from '../../services/trivia';

import { Question } from '../../shared/types';
import BooleanQuestion from '../../components/BooleanQuestion';
import MultipleQuestion from '../../components/MultipleQuestion';

import { QuestionDisplay, AnswerButton } from './styles';

enum QuizState {
  SelectAmount,
  SetUp,
  AnswerQuestions,
  Finish
}

interface TriviaState {
  category: string;
  difficulty: string;
  type: string;
}

const Quiz = () => {
  const location = useLocation();
  const history = useHistory();
  
  const [triviaState] = useState(location.state as TriviaState);
  const [quizState, setQuizState] = useState(QuizState.SelectAmount);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [amount, setAmount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  const QuestionComponent = triviaState.type === 'multiple' ? MultipleQuestion : BooleanQuestion;

  function startQuiz (chosenAmount: number) {
    setAmount(chosenAmount);
    setQuizState(QuizState.SetUp);

    trivia.get('api.php', {
      params: {
        amount: chosenAmount,
        ...triviaState
      }
    }).then(response => {
        setQuestions(response.data.results);
        setQuizState(QuizState.AnswerQuestions);
      });
  }

  function validateAnswer (isCorrect: boolean) {
    if (isCorrect) setCorrectAnswers(correctAnswers + 1);

    nextQuestion();
  }

  function nextQuestion () {
    const nextIndex = currentQuestion + 1;
    setCurrentQuestion(nextIndex);

    if (nextIndex === amount) {
      setQuizState(QuizState.Finish);
      setTimeout(() => {
        history.push('/quizzes');
      }, 2000);
      return;
    }
  }

  return (
    <>
      <h1 style={{ margin: '1rem' }}>Quiz</h1>
      {
        quizState === QuizState.SelectAmount && (
          <>
            <QuestionDisplay>
              <p>How many questions do you want?</p>
            </QuestionDisplay>
            <AnswerButton onClick={() => startQuiz(5)}>5</AnswerButton>
            <AnswerButton onClick={() => startQuiz(10)}>10</AnswerButton>
            <AnswerButton onClick={() => startQuiz(20)}>20</AnswerButton>
          </>
        )
      }
      {
        (quizState === QuizState.AnswerQuestions && questions[currentQuestion]) && (
          <QuestionComponent question={questions[currentQuestion]} onAnswer={validateAnswer} />
        )
      }
      {
        quizState === QuizState.Finish && (
          <div style={{marginLeft: '1rem'}}>
            <h2>Congratulations!</h2>
            <p>You got {correctAnswers} questions right!</p>
          </div>
        )
      }
    </>
  );
}

export default Quiz;