import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  margin-bottom: .7rem;
  padding: 1rem;
  background-color: #66fcf1;
  color: #1f2833;

  span {
    display: flex;
    align-items: center;
    margin-top: .5rem;
    text-transform: uppercase;
    font-size: .8rem;

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: .2rem;
    }
  }

  span.capitalize {
    text-transform: capitalize;
  }
`;
