import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => {
    return store.movies;
  });
  return (
    <div className="-mt-[400px] relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
      <MovieList title={"Upcomming"} movies={movies.upcomming} />
      {/*
       */}
    </div>
  );
};

export default SecondaryContainer;
