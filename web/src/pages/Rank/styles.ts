import styled from 'styled-components';

export const Content = styled.div`
  margin: 50px 1rem 10vh 1rem;
  padding: 1rem;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
    color: #45a29e;
    text-align: center;
    text-transform: uppercase;
    margin: .5rem;

    svg {
      margin-right: .2rem;
    }
  }
`;

export const RankTable = styled.table`
  width: 100%;
  color: #1f2833;
  margin-bottom: 1rem;

  th, td {
      background-color: #66fcf1;
      padding: .5rem;
      text-align: center;
  }
  
  thead tr:first-child th:first-child {
      border-radius: 4px 0 0 0;
  }

  thead tr:first-child th:last-child {
      border-radius: 0 4px 0 0;
  }

  tbody tr:last-child td:first-child {
      border-radius: 0 0 0 4px;
  }

  tbody tr:last-child td:last-child {
      border-radius: 0 0 4px 0;
  }
`;