import React, { useEffect } from 'react';
import './App.scss';
import HomeScreen from './components/pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setLogin, setLogout } from './features/userSlice';
import Profile from './components/pages/profile/Profile';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				// still logged In
				dispatch(
					setLogin({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// Not Logged In
				dispatch(setLogout());
			}
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<Switch>
						<Route path="/profile">
							<Profile />
						</Route>
						;
						<Route path="/" exact>
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}
export default App;
