import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

interface ButtonProps {
  primary?: true;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  text-transform: uppercase;
  background: ${props => props.primary ? '#66fcf1' : 'none'};
  border: 2px solid #66fcf1;
  border-radius: 2px;
  color: ${props => props.primary ? '#1f2833' : '#fff'};
  font-weight: ${props => props.primary ? 'bold' : 'normal'};
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

export const Title = styled.h1`
  color: #45a29e;
`;