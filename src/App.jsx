import React from "react";
import Header from "./components/Header";
import MovieTags from "./components/movietags";
import SearchMovies from "./components/SearchMovies";

const App = () => {
  return (
    <div>
      <Header />

      <SearchMovies />

      <MovieTags type="now_playing" title={"Now Playing Movies"} />
      <MovieTags type="popular" title={"Popular Movies"} />
      <MovieTags type="top_rated" title={"Top Rated Movies"} />
      <MovieTags type="upcoming" title={"Upcoming Movies"} />
    </div>
  );
};

export default App;
