import styled from 'styled-components';

export const Container = styled.div`
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
      margin-top: 1rem
    }
  }
`;