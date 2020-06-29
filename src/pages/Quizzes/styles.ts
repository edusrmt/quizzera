import styled from 'styled-components';

export const FilterForm = styled.form`
  margin: 0 1rem 1rem 1rem;
  border: 1px solid black;
  border-radius: 5px;
  
  fieldset {
    display: block;
    border: none;
    padding: .5rem;

    select {
      float: right;
      width: 50%;
    }
  }

  button {
    width: 100%;
    border-radius: 0 0 5px 5px;
    border: none;
    padding: 5px 0;
  }
`;