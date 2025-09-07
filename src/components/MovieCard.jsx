import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="gettin poster image"
        />

        <div className="overlay">
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Overview: {movie.overview.slice(0, 40) + "..."}</p>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
