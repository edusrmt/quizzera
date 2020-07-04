import React from 'react';

import { Container } from './styles';

interface QuestionDisplayProps {
  text: string;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ text }) => {
  return(
    <Container>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  );
}

export default QuestionDisplay;