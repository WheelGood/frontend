import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';

import './App.scss';

const App = (props) => {



  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <NavBar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
