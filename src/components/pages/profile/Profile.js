import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { auth } from '../../../firebase';
import NavBar from '../../navbar/NavBar';
import Plans from './plans/Plans';
import './Profile.scss';
const Profile = () => {
	const user = useSelector(selectUser);

	// Logout function
	const handleSignout = () => {
		auth.signOut();
	};
	return (
		<div className="profile">
			<NavBar />

			<div className="profile__body">
				<h1>Edit Profile</h1>
				<div className="profile__info">
					<img
						src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
						alt=""
					/>
					<div className="profile__details">
						<h2>{user.email}</h2>
						<div className="profile__plans">
							<h3>Plans</h3>
							<Plans />
							<button onClick={handleSignout} className="profile__signout">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
