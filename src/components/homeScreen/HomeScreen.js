import Banner from '../banner/Banner';
import NavBar from '../navbar/NavBar';
import './HomeScreen.scss';

const HomeScreen = () => {
	return (
		<div className="homeScreen">
			<NavBar />
			<Banner />
		</div>
	);
};

export default HomeScreen;
