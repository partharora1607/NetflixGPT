import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const nowTopRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRated(json?.results));
  };

  useEffect(() => {
    // api callx
    nowTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
