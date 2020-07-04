import React, { ElementType} from 'react';
import { Route, BrowserRouter, Switch, Redirect, RouteProps } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Login from './pages/Login';
import Register from './pages/Register';
import Quizzes from './pages/Quizzes';
import Quiz from './pages/Quiz';
import Rank from './pages/Rank';

const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const Page = component as ElementType;

  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? <Page {...props} /> : <Redirect to={{pathname: '/login'}} />
    )} />
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/quizzes" component={Quizzes} />
        <PrivateRoute path="/quiz" component={Quiz} />
        <PrivateRoute path="/rank" component={Rank} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;