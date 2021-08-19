import './SignUpWindow.scss';

const SignUpWindow = () => {
	const handleRegistration = ev => {
		ev.preventDefault();
	};

	const handleSignin = ev => {
		ev.preventDefault();
	};
	return (
		<div className="signUpWindow">
			<form>
				<h1>Sign In</h1>
				<input type="email" placeholder="Enter Email" />
				<input type="password" placeholder="Enter Password" />
				<button type="submit" onClick={handleSignin}>
					Sign In
				</button>
				<h4>
					<span className="signUpWindow__gray">New to Netflix? </span>
					<span className="signUpWindow__link" onClick={handleRegistration}>
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
};

export default SignUpWindow;
