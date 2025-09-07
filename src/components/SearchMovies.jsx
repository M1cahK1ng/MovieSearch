import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


const SearchMovies = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      setMovies(res.data.results);
    };
    fetchMovies();
  }, [query, API_KEY]);

  return (
    <section className="searchMoviesSection">
      <div className="searchMovies">
        <div className="SearchForm">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies.."
          />

          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>

      {query && (
        <div className="movieContainer">
          <h2>Result for "{query}"</h2>
          <div className="movieResult">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchMovies;
