import { useRef } from 'react';
import { auth } from '../../../firebase';
import './SignUpWindow.scss';

const SignUpWindow = () => {
	const passwordRef = useRef('');
	const emailRef = useRef('');
	const handleRegistration = ev => {
		ev.preventDefault();
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then(authUser => {
				console.log(authUser);
			})
			.catch(error => {
				alert(error);
			});
	};

	const handleSignin = ev => {
		ev.preventDefault();
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then(authUser => {})
			.catch(error => {
				alert(error);
			});
	};
	return (
		<div className="signUpWindow">
			<form>
				<h1>Sign In</h1>
				<input type="email" ref={emailRef} placeholder="Enter Email" />
				<input type="password" ref={passwordRef} placeholder="Enter Password" />
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
