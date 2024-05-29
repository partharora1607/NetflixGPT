import { useDispatch } from "react-redux";
import { addUpcomming } from "../utils/slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();

  const nowUpcommingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomming(json?.results));
  };

  useEffect(() => {
    // api callx
    nowUpcommingMovies();
  }, []);
};

export default useUpcommingMovies;
