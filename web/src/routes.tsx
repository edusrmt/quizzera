import React, { ElementType} from 'react';
import { Route, BrowserRouter, Switch, Redirect, RouteProps } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Quizzes from './pages/Quizzes';
import Quiz from './pages/Quiz';
import Rank from './pages/Rank';
import Profile from './pages/Profile';

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
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/quizzes" component={Quizzes} />
        <PrivateRoute path="/quiz" component={Quiz} />
        <PrivateRoute path="/rank" component={Rank} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;