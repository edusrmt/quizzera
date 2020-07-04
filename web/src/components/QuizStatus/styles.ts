import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 10vh;
  background-color: #1a1a1d;
  box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.5);

  span {
    display: flex;
    align-items: center;

    svg {
      margin-right: .2rem;
    }
  }
`;