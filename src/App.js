import React  from 'react';
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
  
  return (
    <Router>
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
        
        
        {/* <Redirect to="/" /> */}
    </Switch>
    </Router>
  );
}

export default App;
