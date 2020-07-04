import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { trivia } from '../../services/trivia';
import server from '../../services/server';

import { Question } from '../../shared/types';
import BooleanQuestion from '../../components/BooleanQuestion';
import MultipleQuestion from '../../components/MultipleQuestion';
import Header from '../../components/Header';
import QuestionDisplay from '../../components/QuestionDisplay';
import QuizStatus from '../../components/QuizStatus';

import { Container, Button } from '../../styles/global';
import { Content } from './styles';

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
  const [successTime, setSuccessTime] = useState(0);
  const [questionTime, setQuestionTime] = useState(Date.now());
  const [totalTime, setTotalTime] = useState(0);
  const [endMessage, setEndMessage] = useState('Time is out!');
  
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
        setQuestionTime(Date.now());

        if (triviaState.type === 'multiple') {
          if (triviaState.difficulty === 'easy') {
            setTotalTime(chosenAmount * 5);
          } else if (triviaState.difficulty === 'medium') {
            setTotalTime(chosenAmount * 10);
          } else {
            setTotalTime(chosenAmount * 15);
          }
        } else {
          setTotalTime(chosenAmount * 5);
        }
      });
  }

  function validateAnswer (isCorrect: boolean) {
    const elapsedTime = (Date.now() - questionTime) / 1000;

    if (isCorrect) { 
      setCorrectAnswers(correctAnswers + 1);
      setSuccessTime(successTime + elapsedTime);
    }

    nextQuestion();
  }

  async function nextQuestion () {
    const nextIndex = currentQuestion + 1;
    setCurrentQuestion(nextIndex);
    setQuestionTime(Date.now());

    // When the quiz ends
    if (nextIndex === amount) {
      setEndMessage('Congratulations!');
      finishQuiz();
    }
  }

  async function finishQuiz () {
    setQuizState(QuizState.Finish);

      const quizScore = {
        questionsAnswered: amount,
        correctAnswers: correctAnswers,
        successTime: successTime,
        isHard: triviaState.difficulty === 'hard'
      }

      await server.post('/score', quizScore);

      setTimeout(() => {
        history.push('/quizzes');
      }, 2000);

      return;
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          {
            quizState === QuizState.SelectAmount && (
              <>
                <QuestionDisplay text="How many questions do you want?" />
                <Button onClick={() => startQuiz(5)}>5</Button>
                <Button onClick={() => startQuiz(10)}>10</Button>
                <Button onClick={() => startQuiz(20)}>20</Button>
              </>
            )
          }
          {
            (quizState === QuizState.AnswerQuestions && questions[currentQuestion]) && (
              <>
                <QuestionComponent question={questions[currentQuestion]} onAnswer={validateAnswer} />
                {
                  totalTime > 0 &&
                  <QuizStatus
                    totalTime={totalTime}
                    totalQuestions={amount}
                    answeredQuestions={currentQuestion}
                    correctAnswers={correctAnswers}
                    onTimeEnd={finishQuiz}
                  />
                }
              </>
            )
          }
          {
            quizState === QuizState.Finish && (      
              <div className="message">        
                <h2>{endMessage}</h2>
                <p>You got {correctAnswers} questions right!</p>              
              </div>
            )
          }
        </Content>      
      </Container>
    </>
  );
}

export default Quiz;