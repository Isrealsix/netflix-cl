import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	const [show, setShow] = useState(false);
	const history = useHistory();

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);

		return () => {
			window.removeEventListener('scroll', transitionNavBar);
		};
	}, []);

	return (
		<div className={`navbar ${show && 'navbar__dark'}`}>
			<div className="navbar__content">
				<img
					className="navbar__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
					alt=""
					onClick={() => history.push('/')}
				/>

				<img
					className="navbar__avatar"
					src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
					alt=""
					onClick={() => history.push('/profile')}
				/>
			</div>
		</div>
	);
};

export default NavBar;
