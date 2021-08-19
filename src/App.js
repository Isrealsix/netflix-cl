import React from 'react';
import './App.scss';
import HomeScreen from './components/pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';

function App() {
	const user = null;
	return (
		<div className="app">
			<Router>
				<Switch>
					{!user ? (
						<Login />
					) : (
						<Route path="/" exact>
							<HomeScreen />
						</Route>
					)}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
