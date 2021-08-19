import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Row.scss';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);
	const base_url = 'https://image.tmdb.org/t/p/original/';

	useEffect(() => {
		const fetchMovie = async () => {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		};
		fetchMovie();
	}, [fetchUrl]);

	console.log(movies);
	return (
		<div className="row">
			<h2 className="row__title">{title}</h2>

			<div className="row__posters">
				{movies.map(
					movie =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<div className="row__box">
								<img
									className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
									key={movie.id}
									src={`${base_url}${
										isLargeRow ? movie.poster_path : movie.backdrop_path
									}`}
									alt={movie.name}
								/>
							</div>
						)
				)}
			</div>
		</div>
	);
};
export default Row;
