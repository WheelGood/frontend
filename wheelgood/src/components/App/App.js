import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import './App.scss';
import About from '../About';
import Map from '../Map';

const App = props => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <Map />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
