import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  background: none;
  border: 2px solid #66fcf1;
  border-radius: 2px;
  color: #fff;
  padding: .9rem;
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: 2px solid #66fcf1;
  border-radius: 2px;
  color: #fff;
  padding: .8rem;
  font-size: 1rem;
`;