// src/components/MovieCard.js
import React, { useEffect, useState } from "react";
import "../App.css";

const MovieCard = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6e2b6b5dc43541598deb9e7a61473830"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-grid">
      {movieList.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>Year: {new Date(movie.release_date).getFullYear()}</p>
          <p>Rating: {movie.vote_average}/10</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
