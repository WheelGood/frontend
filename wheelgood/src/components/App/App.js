import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import './App.scss';

import About from '../About'

const App = (props) => {


	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/' exact>
						<NavBar />
						<Map />
						
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
