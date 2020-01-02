import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';

import './App.scss';
import Map from '../Map/Map';

const App = (props) => {



  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <Map/>
            <NavBar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
