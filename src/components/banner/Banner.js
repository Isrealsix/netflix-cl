import './Banner.scss';

const Banner = () => {
	// Induced a function to truncate long text
	const trunc = (string, length) =>
		string?.length > length ? string.substr(0, length - 1) + '...' : string;
	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">Movie Name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{trunc(
						`This is a weird Description area This is a weird Description area This
					is a weird Description area This is a weird Description area This is a
					weird Description area This is a weird Description area This is a
					weird Description area This is a weird Description area This is a
					weird Description area This is a weird Description area`,
						150
					)}
				</h1>
			</div>
			<div className="banner--fadeBottom"></div>
		</header>
	);
};

export default Banner;
