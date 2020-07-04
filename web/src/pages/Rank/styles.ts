import styled from 'styled-components';

export const RankTable = styled.table`
  width: calc(100% - 2rem);
  border-collapse: collapse;
  margin: 0 auto;
  
  &, th, td {
    border: 1px solid black;
  }

  td {
    text-align: center;
  }
`;