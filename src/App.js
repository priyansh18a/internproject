import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import Additem from './components/Additems';
import Addtext from './components/Addtext';
import Addimage from './components/Addimage';
import Addimage1 from './components/Addimage1';
import Addquestion from './components/Addquestion';
import Addcode from './components/Addcode';
import Check from './custom/Check';

const App = () => {
  
  return (
    <Router>
    <Switch>
        <Route path="/" exact>
          <Check />
        </Route>
      
        {/* <Redirect to="/" /> */}
    </Switch>
    </Router>
  );
}

export default App;
