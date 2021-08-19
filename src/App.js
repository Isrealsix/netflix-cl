import React, { useEffect } from 'react';
import './App.scss';
import HomeScreen from './components/pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';
import { auth } from './firebase';

function App() {
	const user = null;

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				// still logged In
				console.log(userAuth);
			} else {
				// Not Logged In
			}
		});

		return unsubscribe;
	}, []);
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
