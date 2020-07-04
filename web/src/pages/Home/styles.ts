import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .content {
    border-radius: 5px;
    margin: auto 1rem;
    padding: 1rem;
  }

  img {
    width: 100%;
  }

  p {
    text-align: center;
    text-transform: uppercase;
    font-size: .8rem;
    color: #c5c6c7;
    margin-bottom: 2rem;
  }

  button {
    margin: .5rem 0;
  }
`;