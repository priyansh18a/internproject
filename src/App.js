import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.scss';
import Additem from './components/Additems/Additems';



const App = () => {
  
  return (
    <Router>
    <Switch>
        <Route path="/user/:screenId" exact>
          <Additem/>
        </Route>
        {/* <Route path="/check" exact>
          <Retrivefile/>
        </Route> */}
        <Redirect to="user/0" />
    </Switch>
    </Router>
  );
}

export default App;
