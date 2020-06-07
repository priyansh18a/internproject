import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import Additem from './components/Additems';


const App = () => {
  
  return (
    <Router>
    <Switch>
        <Route path="/" exact>
          <Additem/>
        </Route>
        <Redirect to="/" />
    </Switch>
    </Router>
  );
}

export default App;
