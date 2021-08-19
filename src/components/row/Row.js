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
			<h2>{title}</h2>

			{movies.map(movie => (
				<img
					className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
					key={movie.id}
					src={`${base_url}${
						isLargeRow ? movie.poster_path : movie.backdrop_path
					}`}
					alt={movie.name}
				/>
			))}
		</div>
	);
};
export default Row;
