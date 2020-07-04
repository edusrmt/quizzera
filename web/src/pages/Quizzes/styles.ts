import styled from 'styled-components';

export const Content = styled.div`
  margin: 50px 1rem 10vh 1rem;
  padding: 1rem;

  .content-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-color: #45a29e;
      color: #fff;
      border: none;
      border-radius: 50%;
      padding: .5rem;

      svg {
        width: 1rem;
        height: 1rem;
      }
    }

  }
`;

export const FilterForm = styled.form`
  margin: 1rem 0;
  border: 2px solid #66fcf1;
  border-radius: 2px;
  
  fieldset {
    display: block;
    border: none;
    padding: .5rem;

    label {
      text-transform: uppercase;
      font-size: .8rem;
    }

    select {
      border: 1px solid #66fcf1;
      border-radius: 2px;
      background: none;
      color: #fff;
      float: right;
      width: 60%;
      padding: .1rem;
      

      option {
        background-color: #1f2833;
      }
    }
  }

  button {
    width: 100%;
    border: none;
    padding: 5px 0;
    background-color: #66fcf1;
    color: #1f2833;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: .2rem;
  }
`;