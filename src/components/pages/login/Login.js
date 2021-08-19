import { useState } from 'react';
import './Login.scss';
import SignUpWindow from '../signUpWindow/SignUpWindow';

const Login = () => {
	const [signIn, setSignIn] = useState(false);

	const handleSignIn = () => {
		setSignIn(true);
	};
	return (
		<div className="login">
			<div className="login__background">
				<img
					className="login__logo"
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
				/>
				<button className="login__button" onClick={handleSignIn}>
					Sign In
				</button>
				<div className="login__gradient"></div>

				<div className="login__body">
					{signIn ? (
						<SignUpWindow />
					) : (
						<>
							<h1>Unlimited films, TV programmes and more</h1>
							<h2>Watch anywhere. Cancel at any time.</h2>
							<h3>
								Ready to watch? Enter you email to create or restart your
								membership.
							</h3>
							<div className="login__input">
								<form>
									<input type="email" placeholder="Email Address" />
									<button onClick={handleSignIn} className="login__getStarted">
										GET STARTED
									</button>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
