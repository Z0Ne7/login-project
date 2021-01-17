import React from 'react';
import { LoginPage } from './pages/login/login';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={LoginPage}></Route>
        <Redirect from='/' exact to='login' />
      </Switch>
    </Router>
  );
}

export default App;
