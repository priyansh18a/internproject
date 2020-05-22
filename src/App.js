import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Additem from './components/Additems';
import Addtext from './components/Addtext';
import Addimage from './components/Addimage';
import Addquestion from './components/Addquestion';
import Addcode from './components/Addcode';

function App() {
  return (
    <Router>
    <Switch>
        <Route path="/" exact>
          <Additem />
        </Route>
        <Route path="/text" exact>
          <Addtext />
        </Route>
        <Route path="/image" exact>
          <Addimage />
        </Route>
        <Route path="/question" exact>
          <Addquestion />
        </Route>
        <Route path="/code" exact>
          <Addcode />
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
