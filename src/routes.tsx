import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Quizzes from './pages/Quizzes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Quizzes} />
    </BrowserRouter>
  );
}

export default Routes;