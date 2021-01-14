import React from 'react';
import { Login } from './components/pages';
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
        <Route path='/login' exact component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
