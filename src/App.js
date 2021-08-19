import React from 'react';
import './App.scss';
import HomeScreen from './components/homeScreen/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/">
						<HomeScreen />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
