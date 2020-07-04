import styled from 'styled-components';

export const Content = styled.div`
  margin: auto 1rem;
  padding: 1rem;

  img {
    width: 100%;
  }

  p {
    text-align: center;
    text-transform: uppercase;
    font-size: .8rem;
    margin-bottom: 2rem;
    color: #c5c6c7;
  }

  .errors-container {
    border: 2px solid #f070a1;
    border-radius: 2px;
    padding: 1rem;
    margin-bottom: 1rem;

    span {
      display: block;
      color: #f070a1;
      text-transform: uppercase;
      font-size: .8rem;

      & + span {
        margin-top: .5rem;
      }
    }
  }

  fieldset {
    border: none;

    label {
      font-size: .8rem;
      color: white;
      text-transform: uppercase;
      margin-bottom: 100px;
    }
  }

  Input {
    margin-bottom: 1rem;
  }

  Button {
    margin-top: .5rem;
  }
`;