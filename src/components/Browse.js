import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/slices/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
    console.log(json);
  };

  useEffect(() => {
    // api call
    nowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
