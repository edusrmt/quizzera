import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 50px 1rem 10vh 1rem;
  padding: 1rem;

  img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: .2rem;
      margin-left: 1rem;
      color: #45a29e;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  button {
    text-transform: uppercase;
    background: none;
    border: none;
    color: #f070a1;
    padding: .9rem;
    margin-top: 1rem;
    font-weight: bold;
    letter-spacing: .15rem;
  }
`;