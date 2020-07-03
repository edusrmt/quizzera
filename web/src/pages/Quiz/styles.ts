import styled from 'styled-components';

export const QuestionDisplay = styled.div`
  margin: 0 1rem;
  border: 1px solid black;
  border-radius: 5px;
  min-height: 25vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const AnswerButton = styled.button`
  width: calc(100% - 2rem);
  margin: 1rem 1rem 0 1rem;
  height: 10vh;
`;