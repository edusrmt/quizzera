import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Quizzes from './pages/Quizzes';
import Quiz from './pages/Quiz';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Quizzes} exact />
      <Route path="/quiz" component={Quiz} />
    </BrowserRouter>
  );
}

export default Routes;