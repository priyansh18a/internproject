import React, { useContext }from 'react';
import {AuthContext  } from "./custom/auth-context";
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
import ComingSoon from './components/ComingSoon/ComingSoon';
import TeachProfile from './components/TeachProfile/TeachProfile';



const App = () => {
  
  const {currentUser} = useContext(AuthContext);
  let routes;

  if (currentUser) {
    routes = (
   <Switch>
        <Route exact path="/" >
          <Learn/>
        </Route>
        <Route exact path='/learn'>
          <Learn/>
        </Route>
        <Route path='/teach' exact >
          <Teach/>
        </Route>
        <Route path='/teach/user' exact >
          <TeachProfile/>
        </Route>
        <Route path="/teach/user/:screenId" exact>
          <Additem/>
        </Route>
        <Route path="/comingsoon" exact>
          <ComingSoon/>
        </Route>
        <Redirect to="/comingsoon" />
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
    <Router>
    {routes}
    </Router>
);
}

export default App;
