import React, { useState, useCallback } from 'react';
import { AuthContext } from './custom/auth-context';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.scss';
import Additem from './components/Additems/Additems';
import Learn from './components/Learn/Learn'
import Teach from './components/Teach/Teach'



const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []); 

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);


  let routes;

  if (isLoggedIn) {
    routes = (
   <Switch>
        <Route exact path="/" >
          <Learn/>
        </Route>
        <Route exact path='/learn'>
          <Learn/>
        </Route>
        <Route path='/teach'  exact >
          <Teach/>
        </Route>
        <Route path="/teach/user/:screenId" exact>
          <Additem/>
        </Route>
        <Redirect to="/teach/user/0" />
    </Switch>
    );
  } else {
    routes = (
      <Switch>
      <Route exact path="/" >
        <Learn/>
      </Route>
      <Route exact path='/learn'>
        <Learn/>
      </Route>
      <Route path='/teach'  exact >
        <Teach/>
      </Route>
      <Redirect to="/" />
    </Switch>
    );
  }

  
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
    <Router>
    {routes}
    </Router>
    </AuthContext.Provider>
  
  );
}

export default App;
