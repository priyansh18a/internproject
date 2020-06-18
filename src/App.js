import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Learn from './Components/Learn/Learn'
import Teach from './Components/Teach/Teach'
import Choose from './Components/Choose/Choose'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Learn/>
        </Route>
        <Route exact path='/learn'>
          <Learn/>
        </Route>
        <Route exact path='/teach'>
          <Teach/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
