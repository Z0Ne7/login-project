import React from 'react';
import { LoginPage } from './pages/login/login';
import { routes } from './routes/routes';
import { NavbarHeader } from './components/navbar-header/navbar-header';
import { LeftSidebar } from '././components/left-sidebar/left-sidebar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  Redirect,
} from 'react-router-dom';

function App() {
  const reactRouter = () => {
    return routes.map((route, i) => {
      return (
        <Route
          path={route.path}
          key={i}
          exact={route.exact}
          component={route.component}
        />
      );
    });
  };
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={LoginPage}></Route>
        {/* <Route path='/project-type' exact component={ProjectType}></Route> */}
        <Redirect from='/' exact to='login' />
        <Route
          render={({ location }) => {
            return (
              <div className='flex flex-row min-h-screen bg-gray-500'>
                <LeftSidebar />
                <div className='flex flex-col w-10/12'>
                  <NavbarHeader />
                  <Switch location={location}>{reactRouter()}</Switch>
                </div>
              </div>
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
