import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieTags = ({ type, title }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [movieData, setMovieData] = useState([]);


  useEffect(() => {
    const fetchMovieData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
      );

      console.log(res.data);
      setMovieData(res.data.results);
    };

    fetchMovieData();
  }, [type, API_KEY]);

  return (
    <section className="movieTagsSection">
      <header className="tags">
        <h2>{title}</h2>
      </header>

      <div className="movieContainer">
        <div className="movieResults">
          {
            // movie reults here
            movieData.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default MovieTags;
