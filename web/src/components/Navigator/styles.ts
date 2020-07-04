import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 10vh;
  color: red;
  background-color: #1a1a1d;
  box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.5);
  
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    text-transform: uppercase;
    color: #c5c6c7;
    font-size: .7rem;

    &:visited {
      color: #c5c6c7;
    }

    &.active {
      color: #66fcf1;
    }

    svg {
      margin-bottom: .1rem;
    }
  }
`;