import { useState, useEffect } from 'react';
import './NavBar.scss';

const NavBar = () => {
	const [show, setShow] = useState(false);

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
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
				/>

				<img
					className="navbar__avatar"
					src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default NavBar;
